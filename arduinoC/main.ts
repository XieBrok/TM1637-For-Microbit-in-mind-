
//% color="#AA278D" iconWidth=50 iconHeight=40
namespace TM1637DigitalTube {

    //% block="TM1637 init CLK [CLKPIN] DIO [DIOPIN]" blockType="command"
    //% CLKPIN.shadow="dropdown" CLKPIN.options="CLKPIN"
    //% DIOPIN.shadow="dropdown" DIOPIN.options="DIOPIN"
    export function TM1637Init(parameter: any){
        let clk=parameter.CLKPIN.code;
        let dio=parameter.DIOPIN.code;

        Generator.addInclude("TM1637Include","#include <SevenSegmentTM1637.h>");
        Generator.addInclude("TM1637IncludeExtended","#include <SevenSegmentExtended.h>");
        Generator.addObject("TM1637Object","SevenSegmentExtended",`tm1637(${clk},${dio});`);
        Generator.addSetup("TM1637Init",`tm1637.begin();`);
        
    }

    //% block="TM1637 Display [STR]" blockType="command"
    //% STR.shadow="string" STR.defl="1234"
    export function TM1637DisplayPOS(parameter:any){
        
        let str=parameter.STR.code;
        Generator.addCode(`tm1637.print(${str});`);
    }

    //% block="TM1637 Clear" blockType="command"
    export function TM1637Clear(parameter:any){
        
        Generator.addCode(`tm1637.clear();`);
    }

    //% block="TM1637 Display Time [TIME]:[MIN] COLON [COLON]"
    //% TIME.shadow="range" TIME.params.min="0" TIME.params.max="23" TIME.defl="12" 
    //% MIN.shadow="range" MIN.params.min="0" MIN.params.max="59" MIN.defl="30" 
    //% COLON.shadow="dropdownRound" COLON.options="COLON"
    export function TM1637DisplayTime(parameter:any){
        let tm=parameter.TIME.code;
        let min=parameter.MIN.code;
        let col=parameter.COLON.code;
       
        Generator.addCode(`tm1637.printTime(${tm},${min},${col});`)
    }

   
}
