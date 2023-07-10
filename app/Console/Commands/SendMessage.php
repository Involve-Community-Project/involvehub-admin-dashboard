<?php

namespace App\Console\Commands;

use App\Events\PublicEvent;
use Illuminate\Console\Command;

class SendMessage extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'message:send {message=Hello world! : The message to send}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Send a message to the public channel';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        /** @var string $message */
        $message = $this->argument('message');

        event(new PublicEvent($message));

        return Command::SUCCESS;
    }
}
