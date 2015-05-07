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
declare variable $hairpins := $snippet//(mei:hairpin[not(./parent::mei:*/parent::mei:choice)]|mei:choice[.//mei:hairpin]);
declare variable $dynams := $snippet//mei:dynam;
declare variable $dirs := $snippet//mei:dir;
declare variable $choices := $snippet//(mei:choice[.//mei:hairpin]);


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

declare function local:jsonifyElements($elements) {
    let $strings := for $x in $elements
                        (:let $testelem := $x//mei:hairpin:)
                        let $name1 := local-name($x)
                        let $place := $x//@place
                        let $staffText := $x//@staff
                        
                         let $staffText1 := if(contains($staffText,' '))then(substring-before($staffText, ' '))else($staffText)
                         let $staffText2 := if(contains($staffText,' '))then(substring-after($staffText, ' '))else()
                       
                        let $tstamp := $x//@tstamp
                        let $tstamp2 := $x//@tstamp2
                    
                        let $form := $x//@form
    
                   
                    return 
                        concat('{"name":"',$name1,'",',                         
                             '"icon":"resources/images/mix_volume.png",',
                            '"tstamp":"',$tstamp,'",',
                            '"tstamp2":"',$tstamp2,'",',
                            '"place":"',$place,'",',
                            '"form":"',$form,'",',
                            '"tag":"',$name1,'",',
                            '"staff":"',$staffText1,'",',
                            '"staff2":"',$staffText2,'",',
                             '"leaf":true',
                        '}')
    
    return 
        string-join($strings,',')
    
};

declare function local:jsonifyChoices($choices) {
    let $strings := for $elem in $choices
                    
                    let $id := if($elem//@xml:id) then($elem//@xml:id[1]) else(generate-id($elem))
                    let $measureID := $elem/ancestor::mei:measure/@xml:id
                    let $measureN := $elem/ancestor::mei:measure/@n
                    
                    let $obvious := 'false'                                        
                    let $ambiguous := 'true'
                    
                    let $name := concat('choice_m', $measureN)
                    
                    let $testarray := local:jsonifyElements($elem/*)
                 
                    return 
                        concat('{"id":"',$id,'",',
                            '"name":"',$name,'",',
                            '"obvious":"',$obvious,'",',
                            '"ambiguous":"',$ambiguous,'",',                           
                             '"icon":"resources/images/details-xml.png",',
                            '"measureid":"',$measureID,'",',
                            '"measurenr":"',$measureN,'",',
                            '"children":[',  
                                $testarray,                          
                           ']',
                       
                        '}')
    
    return 
        string-join($strings,',')
};


declare function local:jsonifyHairpins($hairpins) {
   let $strings := for $elem in $hairpins
                    
                    let $id := if($elem//@xml:id) then($elem//@xml:id[1]) else(generate-id($elem))
                    let $measureID := $elem/ancestor::mei:measure/@xml:id
                    let $measureN := $elem/ancestor::mei:measure/@n
                    
                    let $obvious := 'true'
                                         
                    let $ambiguous := 'false'
                    
                  
            
                    let $place := $elem/string(@place)
                    let $staffText := $elem/@staff
                    
                     let $staffText1 := if(contains($staffText,' '))then(substring-before($staffText, ' '))else($staffText)
                     let $staffText2 := if(contains($staffText,' '))then(substring-after($staffText, ' '))else()
                                        
                    
                    let $tstamp := $elem/(@tstamp)
                    let $tstamp2 := $elem/(@tstamp2)
                    
                     let $form := $elem/@form
                     
                      let $name := concat($form, '_s', $staffText, '_m', $measureN, '_', $place)
                      
                    return 
                        concat('{"id":"',$id,'",',
                            '"name":"',$name,'",',
                            '"obvious":"',$obvious,'",',
                            '"ambiguous":"',$ambiguous,'",',                           
                             '"icon":"resources/images/mix_volume.png",',
                            '"measureid":"',$measureID,'",',
                            '"measurenr":"',$measureN,'",',
                           (: '"children":[{',  
                            '"icon":"resources/images/details-xml.png",',:)
                            '"tstamp":"',$tstamp,'",',
                            '"tstamp2":"',$tstamp2,'",',
                            '"place":"',$place,'",',
                            '"form":"',$form,'",',
                            '"tag":"",', 
                            '"staff":"',$staffText1,'",',
                            '"staff2":"',$staffText2,'",',
                            (:'"test":"',$test,'",',
                           
                            '"choces":[',local:jsonifyChoices($choices, $test),'],',:)
                             '"leaf":true',
                            
                            
                           (: '}]',:)
                       
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

declare function local:jsonifyHairChoice($hairpins, $choices) {
        let $test4 := local:jsonifyHairpins($hairpins)
        let $test3 :=  local:jsonifyChoices($choices)

    return if($test4 != '')
    then( concat($test4, ',', $test3))
    else(concat($test4, $test3))
   
    
};



(:concat('["',string-join($sources/@xml:id,'","'),'"]'):)
  (
    '{"slurs":[',
        local:jsonifySlurs($slurs),
    '],"children":[',
        local:jsonifyHairChoice($hairpins, $choices), 
    '],"dynams":[',
        local:jsonifyDynams($dynams),
    '],"dirs":[',
        local:jsonifyDirs($dirs),
    ']}'

)
