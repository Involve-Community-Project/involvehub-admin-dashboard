<?php

namespace App\Repositories;

use App\Interfaces\CompanyRepositoryInterface;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Pagination\Paginator;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;

class CompanyRepository implements CompanyRepositoryInterface
{
    public function __construct()
    {
    }

    public function getAllCompanies()
    {
        $companies = DB::connection('mysql_main_db')->table('maindb.databases')->get(['id', 'dbname', 'username']);

        $companies = $companies->map(
            function ($company) {
                $user = DB::connection('mysql_main_db')->table('maindb.users')->where('database_id', $company->id)
                    ->first();

                $platform = DB::connection('mysql_main_db')->table($company->dbname . '.ef_platform_setting')->first();

                $company->name = $platform->platform_name;
                $company->email = $user->email;
                // $company->admin_user = $user;
                // $company->platform = $platform;

                return $company;
            }
        );

        return $this->paginate($companies);
    }

    public function getCompanyById($companyId)
    {
        $company = DB::connection('mysql_main_db')->table('maindb.databases')->where('id', $companyId)->first();
        $user = DB::connection('mysql_main_db')->table('maindb.users')->where('database_id', $company->id)->first();
        $platform = DB::connection('mysql_main_db')->table($company->dbname . '.ef_platform_setting')->first();

        $company->name = $platform->platform_name;
        $company->admin_user = $user;
        $company->platform = $platform;

        return $company;
    }

    public function createCompany(array $companyDetails)
    {

    }

    public function updateCompany(array $companyDetails, $companyId)
    {
        return [];
    }

    public function deleteCompany($companyId)
    {
        return [];
    }

    private function paginate($items, $perPage = 5, $page = null, $options = [])
    {

        $page = $page ?: (Paginator::resolveCurrentPage() ?: 1);

        $items = $items instanceof Collection ? $items : Collection::make($items);

        return new LengthAwarePaginator($items->forPage($page, $perPage), $items->count(), $perPage, $page, $options);
    }
}
