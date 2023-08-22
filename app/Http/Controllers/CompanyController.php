<?php

namespace App\Http\Controllers;

use App\Interfaces\CompanyRepositoryInterface;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class CompanyController extends Controller
{
    public function __construct(private CompanyRepositoryInterface $companyRepository)
    {
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $companies = $this->companyRepository->getAllCompanies();

        return response()->json($companies, Response::HTTP_OK);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate(
            [
                'name' => 'required',
                'email' => 'required|email',
                'password' => 'required|min:8',
            ]
        );

        $company = $this->companyRepository->createCompany($data);

        return response()->json($company, Response::HTTP_CREATED);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $company = $this->companyRepository->getCompanyById($id);

        return response()->json($company, Response::HTTP_OK);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $company = $this->companyRepository->updateCompany($request->all(), $id);

        return response()->json($company, Response::HTTP_OK);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $company = $this->companyRepository->deleteCompany($id);

        return response()->json($company, Response::HTTP_OK);
    }
}
