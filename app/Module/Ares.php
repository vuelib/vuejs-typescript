<?php

namespace App\Module;

class Ares
{
    /** @var string */
    private $ares_url = 'https://wwwinfo.mfcr.cz/cgi-bin/ares/darv_bas.cgi?ico=';

    /** @var int */
    private $ic;


    /**
     * @param int $ic IČ of subject
     */
    public function __construct($ic)
    {
        $this->ic = (int)$ic;
    }

    /**
     * @return array Data
     */
    public function getData()
    {
        $url = $this->ares_url . $this->ic;
        $file = $this->getXML($url);
        if ($file) $xml = simplexml_load_string($file);
        if (isset($xml)) {
            $ns = $xml->getDocNamespaces();
            $data = $xml->children($ns['are']);
            $el = $data->children($ns['D'])->VBAS;
            return [
                'ic' => strval($el->ICO),
                'dic' => strval($el->DIC),
                'nazev' => strval($el->OF),
                'ulice' => strval($el->AD->UC),
                'mesto' => strval($el->AA->N),
                'zeme' => strval($el->AA->NS),
                'psc' => strval($el->AA->PSC),
            ];
        }
        return false;
    }


    /**
     * @param string $url
     * @return string
     */
    private function getXML($url)
    {
        return file_get_contents($url);
    }
}
