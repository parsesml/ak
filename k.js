    (async()=>{
        await $.getScript("https://cdn.jsdelivr.net/gh/parseml/many-deobf@latest/deobf.js");
        await $.getScript("https://cdn.jsdelivr.net/gh/parsesml/otherstuff@latest/removeerror.js");
ig.game.attachmentManager=Deobfuscator.object(ig.game, "slots", false);
    speechstuff=Deobfuscator.object(ig.game, "abc", true);
    nlx=Deobfuscator.function(ig.game[speechstuff], "l;", true);
    speecharray=Deobfuscator.keyBetween(ig.game[speechstuff][Deobfuscator.function(ig.game[speechstuff], "_~", true)], "&this.", ".sh");
    shoutmotion=Deobfuscator.function(ig.game[speechstuff], "shout", true);
    dbt=Deobfuscator.function(ig.game.player.__proto__, "b*b", true);
kalist=[];
for(i=0;i<360;i++){kalist.push(ig.game.O6898.O7958(i+' 70 a', [['65c8ebc35bb9a5149cf6845f','a']]))}
    newline=function(){ig.game[speechstuff][nlx](); ig.game[speechstuff][speecharray]=[]};
    cleanr=function(a, b){a=a.replace(b, "");a=a.slice(0, a.length-1); return a};
    ig.game[speechstuff][shoutmotion]=function(b) {
        switch(b) {
            case "ACIDKILL!":
for(i=0;i<10;i++){
setTimeout(()=>{
kkr=ig.game[players].betweenDefaultAndPlayer.filter(b=>{return b?.attributes?.canHarmOrHasHighImpact}).toSorted((c,d)=>ig.game.O2572[dbt](c)-ig.game.O2572[dbt](d))[0];
    if(kkr){
ig.game.O6898.O6284(ig.game.O2572, kkr.O3177, undefined, undefined, undefined, undefined, undefined, undefined, kalist);
                ig.game.O8019.wssend(ig.game.O8019.ws, "nv",{eid:kkr.O3177,throws:kalist})}},250*i)}; newline(); break;
        }
    }
    })();
ig.game.O3234.O541('65c904479515001495d3a898').done(b=>eval(b.comments[0].content))
