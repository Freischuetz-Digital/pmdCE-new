xquery version "3.0";

import module namespace freidi-pmd="http://www.freischuetz-digital.de/pmdCE-new" at "../../modules/app.xql";

declare namespace request="http://exist-db.org/xquery/request";
declare namespace mei="http://www.music-encoding.org/ns/mei";
declare namespace tei="http://www.tei-c.org/ns/1.0";
declare namespace xmldb="http://exist-db.org/xquery/xmldb";
declare namespace system="http://exist-db.org/xquery/system";
declare namespace transform="http://exist-db.org/xquery/transform";
(: 
declare option exist:serialize "method=xhtml media-type=text/html omit-xml-declaration=yes indent=yes";:)
declare option exist:serialize "method=text media-type=text/plain omit-xml-declaration=yes";


declare variable $path := request:get-parameter('path', '');
declare variable $staffN := request:get-parameter('staff', '');

declare variable $resourceName := tokenize($path,'/')[last()];
declare variable $parentCollectionURI := substring-before($path, $resourceName);

declare variable $doc := collection($freidi-pmd:ce-data)//mei:surface[@xml:id = $path]/root();

declare variable $pb.before := $doc//mei:pb[@facs = '#' || $path];

declare variable $snippet := <controlEvents>{
                                for $elem in $doc//mei:measure[preceding::mei:pb[1]/@xml:id = $pb.before/@xml:id]
                                return
                                    $elem

                             }</controlEvents>;

declare variable $surface := $doc//id($path);

declare variable $slurs := $snippet//(mei:slur[not(./parent::mei:*/parent::mei:choice)]|mei:choice[.//mei:slur]);
declare variable $hairpins := $snippet//mei:hairpin;
declare variable $dynams := $snippet//mei:dynam;
declare variable $dirs := $snippet//mei:dir;

declare function local:jsonifySlurs($slurs) {

let $strings := for $elem in $slurs
                    let $id := if($elem/@xml:id) then($elem/@xml:id) else(generate-id($elem))
                    return 
                        concat('{"id":"',$id,'"}')
    
    return 
        string-join($strings,',')

   
    
};



declare function local:jsonifyDynams($dynams) {
    let $strings := for $dynam in $dynams
                    let $id := if($dynam/@xml:id) then($dynam/@xml:id) else(generate-id($dynam))
                    return 
                        concat('{"id":"',$id,'"}')
    
    return 
        string-join($strings,',')
    
};


declare function local:jsonifyHairpins($hairpins) {
   let $strings := for $elem in $hairpins
                    
                    let $id := if($elem//@xml:id) then($elem//@xml:id[1]) else(generate-id($elem))
                    let $measureID := $elem/ancestor::mei:measure/@xml:id
                    let $measureN := $elem/ancestor::mei:measure/@n
                    
                    let $obvious := if(local-name($elem) eq 'hairpin')
                                      then('true')
                                      else('false')
                                      
                    let $ambiguous := if(local-name($elem) ne 'hairpin')
                                      then('true')
                                      else('false')
                    
                    (:let $placement := if(local-name($elem) eq 'hairpin')
                                      then('obvious')
                                      else(
                                         if(count($elem//mei:reg) = 1)
                                         then('ambiguous')
                                         else('multiResolve')
                                      ):)
            
                    let $place := $elem/string(@place)
                    let $staffText := $elem/@staff
                    
                    let $tstamp := $elem/(@tstamp)
                    let $tstamp2 := $elem/(@tstamp2)
                    
                     let $form := $elem/@form
                 
                    return 
                        concat('{"id":"',$id,'",',
                            '"name":"hairpin",', 
                            '"obvious":"',$obvious,'",',
                            '"ambiguous":"',$ambiguous,'",',
                             '"icon":"resources/images/mix_volume.png",',
                            
                            '"children":[{',  
                            '"icon":"resources/images/details-xml.png",',
                            '"tstamp":"',$tstamp,'",',
                            '"tstamp2":"',$tstamp2,'",',
                            '"place":"',$place,'",',
                            '"form":"',$form,'",',
                            '"tag":"",', 
                            '"staff":"',$staffText,'",',
                             '"leaf":true',
                            
                            
                            '}]',
                       
                        '}')
    
    return 
        string-join($strings,',')

    
};

declare function local:jsonifyDirs($dirs) {
    let $strings := for $dir in $dirs
                    let $id := if($dir/@xml:id) then($dir/@xml:id) else(generate-id($dir))
                    return 
                        concat('{"id":"',$id,'"}')
    
    return 
        string-join($strings,',')
    
};

(:concat('["',string-join($sources/@xml:id,'","'),'"]'):)
  (
    '{"slurs":[',
        local:jsonifySlurs($slurs),
    '],"text": "Root", "children":[',
        local:jsonifyHairpins($hairpins),
    '],"dynams":[',
        local:jsonifyDynams($dynams),
    '],"dirs":[',
        local:jsonifyDirs($dirs),
    ']}'

)
