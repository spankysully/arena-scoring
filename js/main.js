var width = $(window).width();

$(document).ready(function(){


    $(window).resize(function() {
        width = $(window).width();
    });

    $(".popup span.close").click(function(){
        $(".popup").hide();
    });

    $("section > div").click(function(e){
        $(".popup").hide();
        $("div").removeClass('active');
        $(this).addClass('active');
        let deviceType = $(this).attr('class').split(' ')[0];
        loadSettings($(this).parent().attr('id'), $(this).attr('data-channel'), deviceType);
    });
});

function loadSettings(parent, trigger, deviceType){
    $('aside ul').html('');
    $(`<li style='display: none' class='header'><span class='close'>X</span>CUSTOMIZE<span id='deviceType'>${deviceType}</span></li>`).appendTo('aside ul').slideDown('fast');
    console.log(`parent: ${parent}, channel: ${trigger}`)
    for (let [key, value] of Object.entries(settings[parent][trigger])) {
        //<li>Triggered by Player <span>OFF</span></li>
        $(`<li style="display: none;">${key}<span>${value}</span></li>`).appendTo('aside ul').slideDown('fast');
      }

    if (width < 1150){
        $("aside").css({"transform": "translateX(-100%)"});
    }

    $("aside .close").click(function(){
        if (width < 1150){
            $("aside").css({"transform": "translateX(0)"});
        }
    });
}



$(".island-code .close").click(function(){
    $(".island-code").hide();
});









const settings = {
    
    
//Player COUNTING/ VR
settings1 : {
    one:{
        '*** This must be activated by a sequencer at game start ***' :'',
        'When Triggered Transmit On':'CH 01'        
    },
    two:{
        '*** This mutator counts players. MUST cover full map. ***' :'',
        'Allow Weapon Fire': 'YES',
        'Enabled At Game Start': 'NO',
        'Safe Team': '1',
        'Enable When Receiving From': 'CH 01',
        'On Player Entering Zone Transmit On': 'CH 02',
        'On Player Leaving Zone Transmit On': 'CH 03',
    },
    three:{
        '*** This tracker recreates the Last Man Standing setting ***' :'',
        'Stat To Track': 'CHANNEL',
        'Target Value': '0',
        'Sharing': 'ALL',
        'Description Text': 'Enemies Remaining',
        'Show Progress': 'Remaining',
        'Increment Progress When Receiving From': 'CH 03',
        'Increase Target Value When Receiving From': 'CH 02',
        'When Complete Transmit On': 'CH 04',
    },
    four:{
        '*** This mutator awards the Victory Points ***' :'',
        'Allow Weapon Fire': 'YES',
        'Enabled At Game Start': 'NO',
        'Enable When Receiving From': 'CH 04',
        'On Player Entering Zone Transmit On': 'CH 05',
    },
    five:{
        '*** This awards the Victory Points. Score Value == Transmit On Score ***' :'',
        'Score Value': '3',
        'Transmit On Score': '3',
        'Activate When Receiving From': 'CH 05',
        'On Score Transmit To': 'CH 06',
    },
    six:{
        '*** A Round Settings Device could also be used for this purpose':'',
        'End Round When Receiving From:': 'CH 06'
    },
    seven:{
        '*** This mutator counts deaths. MUST cover full map. ***' :'',
        'Allow Weapon Fire': 'YES',
        'On Player Leaving Zone Transmit On': 'CH 03'
    }
},

//SETTINGS TOP 5
 settings2 : {
    one:{
        '*** This trigger enables the Top 5 Tracker ***' :'',
        'Time Can Trigger': '5',
        'Transmit Every X Triggers': '5',
        'Trigger When Receiving From': 'CH 02',
        'When Triggered Transmit On': 'CH 07'
    },
     two:{
        '*** This tracker recreates the Last Man Standing setting ***' :'',
        'Stat To Track': 'CHANNEL',
        'Target Value': '1',
        'Sharing': 'ALL',
        'Show On HUD': 'NO',
        'Show Progress': 'Off',
        'Increment Progress When Receiving From': 'CH 03',
        'Assign When Receiving From': 'CH 07',
        'Increase Target Value When Receiving From': 'CH 02',
        'When Complete Transmit On': 'CH 08',
    },
    three:{
        'Message': 'Top 5!: +1 Points',
        'Time From Round Start': 'OFF',
        'Display Time': '3 SECONDS',
        'Show When Receiving From': 'CH 08'
    },
    four:{
        '*** This trigger turns on the scoring mutator ***' :'',
        'Time Can Trigger': '1',
        'Transmit Every X Triggers': '1',
        'Trigger When Receiving From': 'CH 08',
        'When Triggered Transmit On': 'CH 11'
    }
},

//SETTINGS Top 3
 settings3 : {
    one:{
        '*** This trigger enables the Top 3 Tracker ***' :'',
        'Time Can Trigger': '3',
        'Transmit Every X Triggers': '3',
        'Trigger When Receiving From': 'CH 02',
        'When Triggered Transmit On': 'CH 09'
    },
     two:{
        '*** This tracker recreates the Last Man Standing setting ***' :'',
        'Stat To Track': 'CHANNEL',
        'Target Value': '1',
        'Sharing': 'ALL',
        'Show On HUD': 'NO',
        'Show Progress': 'Off',
        'Increment Progress When Receiving From': 'CH 03',
        'Assign When Receiving From': 'CH 09',
        'Increase Target Value When Receiving From': 'CH 02',
        'When Complete Transmit On': 'CH 10',
    },
    three:{
        'Message': 'Top 3!: +1 Points',
        'Time From Round Start': 'OFF',
        'Display Time': '3 SECONDS',
        'Show When Receiving From': 'CH 10'
    },
    four:{
        '*** This trigger turns on the scoring mutator ***' :'',
        'Time Can Trigger': '1',
        'Transmit Every X Triggers': '1',
        'Trigger When Receiving From': 'CH 10',
        'When Triggered Transmit On': 'CH 11'
    }
},

//SETTINGS TOP 3
 settings4 : {
   
    one:{
        '*** This mutator awards the Top 3/Top 5 Points ***' :'',
        'Allow Weapon Fire': 'YES',
        'Enabled At Game Start': 'NO',
        'Enable When Receiving From': 'CH 11',
        'Disable When Receiving From': 'CH 13',
        'On Player Entering Zone Transmit On': 'CH 12',
    },
    two:{
        'Score Value': '1',
        'Activate When Receiving From': 'CH 12'
    },
    three:{
        '*** This trigger turns off the scoring mutator ***' :'',
        'Delay': '1 SECOND',
        'Transmit Every X Triggers': '3',
        'Trigger When Receiving From': 'CH 11',
        'When Triggered Transmit On': 'CH 13'
    }
}
};

