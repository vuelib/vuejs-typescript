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
            // if ($this->ic === strval($el->ICO))
        }
        return false;
    }

    /**
     * @param string $xml
     * @return string
     */
    private function getDicFromXML($xml)
    {
        $pattern = '/([0-9]*)<\/D:DIC>/';
        simplexml_load_string($pattern, $xml, $matches);
        return isset($matches[1]) ? 'CZ' . $matches[1] : false;
    }


    /**
     * @param string $xml
     * @return string
     */
    private function getIcFromXML($xml)
    {
        $ic = simplexml_load_string($xml);
        dump($ic);
        return isset($ic) ? $ic : false;
    }


    /**
     * @param string $xml
     * @return strings
     */
    private function getAddressFromXML($xml)
    {
        $pattern = '/(.*)<\/D:OF>/';
        preg_match($pattern, $xml, $matches);
        return isset($matches[1]) ? $matches[1] : false;
    }

    /**
     * @param string $xml
     * @return string
     */
    private function getStreetFromXML($xml)
    {
        $pattern = '/(.*)<\/D:UC>/';
        preg_match($pattern, $xml, $matches);
        return isset($matches[1]) ? $matches[1] : false;
    }

    /**
     * @param string $xml
     * @return string
     */
    private function getCityFromXML($xml)
    {
        $pattern = '/(.*)<\/D:N>/';
        preg_match($pattern, $xml, $matches);
        return isset($matches[1]) ? $matches[1] : false;
    }

    /**
     * @param string $xml
     * @return string
     */
    private function getPSCFromXML($xml)
    {
        $pattern = '/([0-9]*)<\/D:PSC>/';
        preg_match($pattern, $xml, $matches);
        return isset($matches[1]) ? $matches[1] : false;
    }

    /**
     * @param string $xml
     * @return string
     */
    private function getStateFromXML($xml)
    {
        $pattern = '/(.*)<\/D:NS>/';
        preg_match($pattern, $xml, $matches);
        return isset($matches[1]) ? $matches[1] : false;
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
