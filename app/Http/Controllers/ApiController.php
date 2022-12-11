<?php

namespace App\Http\Controllers;

class ApiController extends Controller
{
    protected function codeRetourne($errno, $errmsg, $data = null) {
        $ret = ['errno' => $errno, 'errmsg' => $errmsg];
        if(!is_null($data)) {
            $ret['data'] = $data;
        }
        return response()->json($ret);
    }

    protected function reussite($data) {
        return $this->codeRetourne(0,'success',$data);
    }

    protected function echoue($errno,$errmsg) {
        return $this->codeRetourne($errno,$errmsg);
    }
}
