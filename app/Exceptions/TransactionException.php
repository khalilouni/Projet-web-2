<?php

namespace App\Exceptions;

use Exception;

class TransactionException extends Exception
{
    //outrepasser constructeur
    public function __construct(array $codeReponse, $info ='')
    {
        list($code,$message) = $codeReponse;
        parent::__construct($info?: $message, $code);
    }

}
