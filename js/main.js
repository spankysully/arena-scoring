$(document).ready(function(){
    $("section > div").click(function(e){
        $("div").removeClass('active');
        $(this).addClass('active');
        $("#deviceType").html($(this).attr('class').split(' ')[0]);
        loadSettings($(this).parent().attr('id'), $(this).attr('data-channel'));
    });
});

function loadSettings(parent, trigger){
    $('aside ul').html('');
    console.log(`parent: ${parent}, channel: ${trigger}`)
    for (let [key, value] of Object.entries(settings[parent][trigger])) {
        //<li>Triggered by Player <span>OFF</span></li>
        $(`<li style="display: none;">${key}<span>${value}</span></li>`).appendTo('aside ul').slideDown('fast');
      }
}



const settings = {
    
settings1 : {
    one:{
        'Time Can Trigger': '1',
        'Disable When Receiving From':'CH 02',
        'Trigger When Receiving From':'CH 99',
        'When Triggered Transmit On':'CH 01',
    },
    two:{
        'Time Can Trigger': '2',
        'Transmit Every X Triggers': '2',
        'Disable When Receiving From': 'CH 03',
        'Trigger When Receiving From': 'CH 99',
        'When Triggered Transmit On': 'CH 02',
    },
    three:{
        'Time Can Trigger': '3',
        'Transmit Every X Triggers': '3',
        'Disable When Receiving From': 'CH 04',
        'Trigger When Receiving From': 'CH 99',
        'When Triggered Transmit On': 'CH 03',
    },
    four:{
        'Time Can Trigger': '4',
        'Transmit Every X Triggers': '4',
        'Disable When Receiving From': 'CH 05',
        'Trigger When Receiving From': 'CH 99',
        'When Triggered Transmit On': 'CH 04',
    },
    five:{
        'Time Can Trigger': '5',
        'Transmit Every X Triggers': '5',
        'Disable When Receiving From': 'CH 06',
        'Trigger When Receiving From': 'CH 99',
        'When Triggered Transmit On': 'CH 05',
    },
    six:{
        'Time Can Trigger': '6',
        'Transmit Every X Triggers': '6',
        'Disable When Receiving From': 'CH 07',
        'Trigger When Receiving From': 'CH 99',
        'When Triggered Transmit On': 'CH 06',
    },
    seven:{
        'Time Can Trigger': '7',
        'Transmit Every X Triggers': '7',
        'Disable When Receiving From': 'CH 08',
        'Trigger When Receiving From': 'CH 99',
        'When Triggered Transmit On': 'CH 07',
    },
    eight:{
        'Time Can Trigger': '8',
        'Transmit Every X Triggers': '8',
        'Disable When Receiving From': 'CH 09',
        'Trigger When Receiving From': 'CH 99',
        'When Triggered Transmit On': 'CH 08',
    },
    nine:{
        'Time Can Trigger': '9',
        'Transmit Every X Triggers': '9',
        'Disable When Receiving From': 'CH 10',
        'Trigger When Receiving From': 'CH 99',
        'When Triggered Transmit On': 'CH 09',
    },
    ten:{
        'Time Can Trigger': '10',
        'Transmit Every X Triggers': '10',
        'Disable When Receiving From': 'CH 11',
        'Trigger When Receiving From': 'CH 99',
        'When Triggered Transmit On': 'CH 10',
    },
    eleven:{
        'Transmit Every X Triggers': '11',
        'Disable When Receiving From': 'CH 12',
        'Trigger When Receiving From': 'CH 99',
        'When Triggered Transmit On': 'CH 11',
    },
    twelve:{
        'Transmit Every X Triggers': '12',
        'Disable When Receiving From': 'CH 13',
        'Trigger When Receiving From': 'CH 99',
        'When Triggered Transmit On': 'CH 12',
    },
    thirteen:{
        'Transmit Every X Triggers': '13',
        'Disable When Receiving From': 'CH 14',
        'Trigger When Receiving From': 'CH 99',
        'When Triggered Transmit On': 'CH 13',
    },
    fourteen:{
        'Transmit Every X Triggers': '14',
        'Disable When Receiving From': 'CH 15',
        'Trigger When Receiving From': 'CH 99',
        'When Triggered Transmit On': 'CH 14',
    },
    fifteen:{
        'Transmit Every X Triggers': '15',
        'Disable When Receiving From': 'CH 16',
        'Trigger When Receiving From': 'CH 99',
        'When Triggered Transmit On': 'CH 15',
    },
    sixteen:{
        'Transmit Every X Triggers': '16',
        'Trigger When Receiving From': 'CH 99',
        'When Triggered Transmit On': 'CH 16',
    },
    seventeen:{
        'Allow Weapon Fire': 'YES',
        'Zone Width': '100',
        'Zone Depth': '100',
        'Zone Height': '100',
        'Enabled At Game Start': 'YES',
        'On Player Leaving Zone Transmit On': 'CH 100'
    },
},

//SETTINGS VICTORY ROYALE
 settings2 : {
    one:{
            },
    two:{
        'Time Can Trigger': '1',
        'Transmit Every X Triggers': '1',
        'Enabled On Game Start': 'DISABLED',
        'Enable When Receiving From': 'CH 02',
        'Disable When Receiving From': 'CH 03',
        'Trigger When Receiving From': 'CH 100',
        'When Triggered Transmit On': 'CH 17'
    },
    three:{
        'Time Can Trigger': '2',
        'Transmit Every X Triggers': '2',
        'Enabled On Game Start': 'DISABLED',
        'Enable When Receiving From': 'CH 03',
        'Disable When Receiving From': 'CH 04',
        'Trigger When Receiving From': 'CH 100',
        'When Triggered Transmit On': 'CH 17'
    },
    four:{
        'Time Can Trigger': '3',
        'Transmit Every X Triggers': '3',
        'Enabled On Game Start': 'DISABLED',
        'Enable When Receiving From': 'CH 04',
        'Disable When Receiving From': 'CH 05',
        'Trigger When Receiving From': 'CH 100',
        'When Triggered Transmit On': 'CH 17'
    },
    five:{
        'Time Can Trigger': '4',
        'Transmit Every X Triggers': '4',
        'Enabled On Game Start': 'DISABLED',
        'Enable When Receiving From': 'CH 05',
        'Disable When Receiving From': 'CH 06',
        'Trigger When Receiving From': 'CH 100',
        'When Triggered Transmit On': 'CH 17'
    },
    six:{
        'Time Can Trigger': '5',
        'Transmit Every X Triggers': '5',
        'Enabled On Game Start': 'DISABLED',
        'Enable When Receiving From': 'CH 06',
        'Disable When Receiving From': 'CH 07',
        'Trigger When Receiving From': 'CH 100',
        'When Triggered Transmit On': 'CH 17'
    },
    seven:{
        'Time Can Trigger': '6',
        'Transmit Every X Triggers': '6',
        'Enabled On Game Start': 'DISABLED',
        'Enable When Receiving From': 'CH 07',
        'Disable When Receiving From': 'CH 08',
        'Trigger When Receiving From': 'CH 100',
        'When Triggered Transmit On': 'CH 17'
    },
    eight:{
        'Time Can Trigger': '7',
        'Transmit Every X Triggers': '7',
        'Enabled On Game Start': 'DISABLED',
        'Enable When Receiving From': 'CH 08',
        'Disable When Receiving From': 'CH 09',
        'Trigger When Receiving From': 'CH 100',
        'When Triggered Transmit On': 'CH 17'
    },
    nine:{
        'Time Can Trigger': '8',
        'Transmit Every X Triggers': '8',
        'Enabled On Game Start': 'DISABLED',
        'Enable When Receiving From': 'CH 09',
        'Disable When Receiving From': 'CH 10',
        'Trigger When Receiving From': 'CH 100',
        'When Triggered Transmit On': 'CH 17'
    },
    ten:{
        'Time Can Trigger': '9',
        'Transmit Every X Triggers': '9',
        'Enabled On Game Start': 'DISABLED',
        'Enable When Receiving From': 'CH 10',
        'Disable When Receiving From': 'CH 11',
        'Trigger When Receiving From': 'CH 100',
        'When Triggered Transmit On': 'CH 17'
    },
    eleven:{
        'Time Can Trigger': '10',
        'Transmit Every X Triggers': '10',
        'Enabled On Game Start': 'DISABLED',
        'Enable When Receiving From': 'CH 11',
        'Disable When Receiving From': 'CH 12',
        'Trigger When Receiving From': 'CH 100',
        'When Triggered Transmit On': 'CH 17'
    },
    twelve:{
        'Transmit Every X Triggers': '11',
        'Enabled On Game Start': 'DISABLED',
        'Enable When Receiving From': 'CH 12',
        'Disable When Receiving From': 'CH 13',
        'Trigger When Receiving From': 'CH 100',
        'When Triggered Transmit On': 'CH 17'
    },
    thirteen:{
        'Transmit Every X Triggers': '12',
        'Enabled On Game Start': 'DISABLED',
        'Enable When Receiving From': 'CH 13',
        'Disable When Receiving From': 'CH 14',
        'Trigger When Receiving From': 'CH 100',
        'When Triggered Transmit On': 'CH 17'
    },
    fourteen:{
        'Transmit Every X Triggers': '13',
        'Enabled On Game Start': 'DISABLED',
        'Enable When Receiving From': 'CH 14',
        'Disable When Receiving From': 'CH 15',
        'Trigger When Receiving From': 'CH 100',
        'When Triggered Transmit On': 'CH 17'
    },
    fifteen:{
        'Transmit Every X Triggers': '14',
        'Enabled On Game Start': 'DISABLED',
        'Enable When Receiving From': 'CH 15',
        'Disable When Receiving From': 'CH 16',
        'Trigger When Receiving From': 'CH 100',
        'When Triggered Transmit On': 'CH 17'
    },
    sixteen:{
        'Transmit Every X Triggers': '15',
        'Enabled On Game Start': 'DISABLED',
        'Enable When Receiving From': 'CH 16',
        'Trigger When Receiving From': 'CH 100',
        'When Triggered Transmit On': 'CH 17'
    },
    seventeen:{
        'Allow Weapon Fire': 'YES',
        'Zone Width': '100',
        'Zone Depth': '100',
        'Zone Height': '100',
        'Enabled At Game Start': 'NO',
        'Enable When Receiving From': 'CH 17',
        'On Player Entering Zone Transmit On': 'CH 22'
    },
    eighteen:{
        'Score Value': '3',
        'Activate When Receiving From': 'CH 22'
    },
    nineteen:{
        'Message': 'Victory!: +3 Points',
        'Time From Round Start': 'OFF',
        'Display Time': '3 SECONDS',
        'Show When Receiving From': 'CH 17'
    },
    twenty:{
        'Delay': '2 SECONDS',
        'Trigger When Receiving From': 'CH 22',
        'When Triggered Transmit On': 'CH 24'
    },
    twentyone:{
        'End Round When Receiving From': 'CH 24'
    }
},

//SETTINGS Top 5
 settings3 : {
    one:{
            },
    two:{

    },
    three:{

    },
    four:{

    },
    five:{

    },
    six:{
        'Time Can Trigger': '1',
        'Transmit Every X Triggers': '1',
        'Enabled On Game Start': 'DISABLED',
        'Enable When Receiving From': 'CH 06',
        'Disable When Receiving From': 'CH 07',
        'Trigger When Receiving From': 'CH 100',
        'When Triggered Transmit On': 'CH 18'
    },
    seven:{
        'Time Can Trigger': '2',
        'Transmit Every X Triggers': '2',
        'Enabled On Game Start': 'DISABLED',
        'Enable When Receiving From': 'CH 07',
        'Disable When Receiving From': 'CH 08',
        'Trigger When Receiving From': 'CH 100',
        'When Triggered Transmit On': 'CH 18'
    },
    eight:{
        'Time Can Trigger': '3',
        'Transmit Every X Triggers': '3',
        'Enabled On Game Start': 'DISABLED',
        'Enable When Receiving From': 'CH 08',
        'Disable When Receiving From': 'CH 09',
        'Trigger When Receiving From': 'CH 100',
        'When Triggered Transmit On': 'CH 18'
    },
    nine:{
        'Time Can Trigger': '4',
        'Transmit Every X Triggers': '4',
        'Enabled On Game Start': 'DISABLED',
        'Enable When Receiving From': 'CH 09',
        'Disable When Receiving From': 'CH 10',
        'Trigger When Receiving From': 'CH 100',
        'When Triggered Transmit On': 'CH 18'
    },
    ten:{
        'Time Can Trigger': '5',
        'Transmit Every X Triggers': '5',
        'Enabled On Game Start': 'DISABLED',
        'Enable When Receiving From': 'CH 10',
        'Disable When Receiving From': 'CH 11',
        'Trigger When Receiving From': 'CH 100',
        'When Triggered Transmit On': 'CH 18'
    },
    eleven:{
        'Time Can Trigger': '6',
        'Transmit Every X Triggers': '6',
        'Enabled On Game Start': 'DISABLED',
        'Enable When Receiving From': 'CH 11',
        'Disable When Receiving From': 'CH 12',
        'Trigger When Receiving From': 'CH 100',
        'When Triggered Transmit On': 'CH 18'
    },
    twelve:{
        'Time Can Trigger': '7',
        'Transmit Every X Triggers': '7',
        'Enabled On Game Start': 'DISABLED',
        'Enable When Receiving From': 'CH 12',
        'Disable When Receiving From': 'CH 13',
        'Trigger When Receiving From': 'CH 100',
        'When Triggered Transmit On': 'CH 18'
    },
    thirteen:{
        'Time Can Trigger': '8',
        'Transmit Every X Triggers': '8',
        'Enabled On Game Start': 'DISABLED',
        'Enable When Receiving From': 'CH 13',
        'Disable When Receiving From': 'CH 14',
        'Trigger When Receiving From': 'CH 100',
        'When Triggered Transmit On': 'CH 18'
    },
    fourteen:{
        'Time Can Trigger': '9',
        'Transmit Every X Triggers': '9',
        'Enabled On Game Start': 'DISABLED',
        'Enable When Receiving From': 'CH 14',
        'Disable When Receiving From': 'CH 15',
        'Trigger When Receiving From': 'CH 100',
        'When Triggered Transmit On': 'CH 18'
    },
    fifteen:{
        'Time Can Trigger': '10',
        'Transmit Every X Triggers': '10',
        'Enabled On Game Start': 'DISABLED',
        'Enable When Receiving From': 'CH 15',
        'Disable When Receiving From': 'CH 16',
        'Trigger When Receiving From': 'CH 100',
        'When Triggered Transmit On': 'CH 18'
    },
    sixteen:{
        'Transmit Every X Triggers': '11',
        'Enabled On Game Start': 'DISABLED',
        'Enable When Receiving From': 'CH 16',
        'Trigger When Receiving From': 'CH 100',
        'When Triggered Transmit On': 'CH 18'
    },
    seventeen:{
        'Allow Weapon Fire': 'YES',
        'Zone Width': '100',
        'Zone Depth': '100',
        'Zone Height': '100',
        'Enabled At Game Start': 'NO',
        'Enable When Receiving From': 'CH 18',
        'Disable When Receiving From': 'CH 23',
        'On Player Entering Zone Transmit On': 'CH 20'
    },
    eighteen:{
        'Score Value': '1',
        'Activate When Receiving From': 'CH 20'
    },
    nineteen:{
        'Message': 'Top 5: +1 Point1',
        'Message Recipient': 'Triggering Player',
        'Time From Round Start': 'OFF',
        'Display Time': '3 SECONDS',
        'Show When Receiving From': 'CH 18'
    },
    twenty:{
        'Delay': '1 SECOND',
        'Trigger When Receiving From': 'CH 18',
        'When Triggered Transmit On': 'CH 23'
    }
},

//SETTINGS VICTORY ROYALE
 settings4 : {
    one:{
            },
    two:{

    },
    three:{

    },
    four:{
        'Time Can Trigger': '1',
        'Transmit Every X Triggers': '1',
        'Enabled On Game Start': 'DISABLED',
        'Enable When Receiving From': 'CH 04',
        'Disable When Receiving From': 'CH 05',
        'Trigger When Receiving From': 'CH 100',
        'When Triggered Transmit On': 'CH 19'
    },
    five:{
        'Time Can Trigger': '2',
        'Transmit Every X Triggers': '2',
        'Enabled On Game Start': 'DISABLED',
        'Enable When Receiving From': 'CH 05',
        'Disable When Receiving From': 'CH 06',
        'Trigger When Receiving From': 'CH 100',
        'When Triggered Transmit On': 'CH 19'
    },
    six:{
        'Time Can Trigger': '3',
        'Transmit Every X Triggers': '3',
        'Enabled On Game Start': 'DISABLED',
        'Enable When Receiving From': 'CH 06',
        'Disable When Receiving From': 'CH 07',
        'Trigger When Receiving From': 'CH 100',
        'When Triggered Transmit On': 'CH 19'
    },
    seven:{
        'Time Can Trigger': '4',
        'Transmit Every X Triggers': '4',
        'Enabled On Game Start': 'DISABLED',
        'Enable When Receiving From': 'CH 07',
        'Disable When Receiving From': 'CH 08',
        'Trigger When Receiving From': 'CH 100',
        'When Triggered Transmit On': 'CH 19'
    },
    eight:{
        'Time Can Trigger': '5',
        'Transmit Every X Triggers': '5',
        'Enabled On Game Start': 'DISABLED',
        'Enable When Receiving From': 'CH 08',
        'Disable When Receiving From': 'CH 09',
        'Trigger When Receiving From': 'CH 100',
        'When Triggered Transmit On': 'CH 19'
    },
    nine:{
        'Time Can Trigger': '6',
        'Transmit Every X Triggers': '6',
        'Enabled On Game Start': 'DISABLED',
        'Enable When Receiving From': 'CH 09',
        'Disable When Receiving From': 'CH 10',
        'Trigger When Receiving From': 'CH 100',
        'When Triggered Transmit On': 'CH 19'
    },
    ten:{
        'Time Can Trigger': '7',
        'Transmit Every X Triggers': '7',
        'Enabled On Game Start': 'DISABLED',
        'Enable When Receiving From': 'CH 10',
        'Disable When Receiving From': 'CH 11',
        'Trigger When Receiving From': 'CH 100',
        'When Triggered Transmit On': 'CH 19'
    },
    eleven:{
        'Time Can Trigger': '8',
        'Transmit Every X Triggers': '8',
        'Enabled On Game Start': 'DISABLED',
        'Enable When Receiving From': 'CH 11',
        'Disable When Receiving From': 'CH 12',
        'Trigger When Receiving From': 'CH 100',
        'When Triggered Transmit On': 'CH 19'
    },
    twelve:{
        'Time Can Trigger': '9',
        'Transmit Every X Triggers': '9',
        'Enabled On Game Start': 'DISABLED',
        'Enable When Receiving From': 'CH 12',
        'Disable When Receiving From': 'CH 13',
        'Trigger When Receiving From': 'CH 100',
        'When Triggered Transmit On': 'CH 19'
    },
    thirteen:{
        'Time Can Trigger': '10',
        'Transmit Every X Triggers': '10',
        'Enabled On Game Start': 'DISABLED',
        'Enable When Receiving From': 'CH 13',
        'Disable When Receiving From': 'CH 14',
        'Trigger When Receiving From': 'CH 100',
        'When Triggered Transmit On': 'CH 19'
    },
    fourteen:{
        'Transmit Every X Triggers': '11',
        'Enabled On Game Start': 'DISABLED',
        'Enable When Receiving From': 'CH 14',
        'Disable When Receiving From': 'CH 15',
        'Trigger When Receiving From': 'CH 100',
        'When Triggered Transmit On': 'CH 19'
    },
    fifteen:{
        'Transmit Every X Triggers': '12',
        'Enabled On Game Start': 'DISABLED',
        'Enable When Receiving From': 'CH 15',
        'Disable When Receiving From': 'CH 16',
        'Trigger When Receiving From': 'CH 100',
        'When Triggered Transmit On': 'CH 19'
    },
    sixteen:{
        'Transmit Every X Triggers': '13',
        'Enabled On Game Start': 'DISABLED',
        'Enable When Receiving From': 'CH 16',
        'Trigger When Receiving From': 'CH 100',
        'When Triggered Transmit On': 'CH 19'
    },
    seventeen:{
        'Allow Weapon Fire': 'YES',
        'Zone Width': '100',
        'Zone Depth': '100',
        'Zone Height': '100',
        'Enabled At Game Start': 'NO',
        'Enable When Receiving From': 'CH 19',
        'Disable When Receiving From': 'CH 23',
        'On Player Entering Zone Transmit On': 'CH 21'
    },
    eighteen:{
        'Score Value': '31',
        'Activate When Receiving From': 'CH 21'
    },
    nineteen:{
        'Message': 'Top 5: +1 Point1',
        'Message Recipient': 'Triggering Player',
        'Time From Round Start': 'OFF',
        'Display Time': '3 SECONDS',
        'Show When Receiving From': 'CH 19'
    },
    twenty:{
        'Delay': '1 SECOND',
        'Trigger When Receiving From': 'CH 19',
        'When Triggered Transmit On': 'CH 23'
    }
}
};

