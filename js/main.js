$(document).ready(function(){
    $("#settings1 > .trigger").click(function(e){
        $(".trigger").removeClass('trigger--active');
        $(this).addClass('trigger--active');

        loadSettings1($(this).parent().attr('id'), $(this).attr('data-channel'));
    });

    $("#settings2 > .trigger").click(function(e){
        $(".trigger").removeClass('trigger--active');
        $(this).addClass('trigger--active');

        loadSettings2($(this).parent().attr('id'), $(this).attr('data-channel'));
    });

    $("#settings3 > .trigger").click(function(e){
        $(".trigger").removeClass('trigger--active');
        $(this).addClass('trigger--active');

        loadSettings3($(this).parent().attr('id'), $(this).attr('data-channel'));
    });

    $("#settings4 > .trigger").click(function(e){
        $(".trigger").removeClass('trigger--active');
        $(this).addClass('trigger--active');

        loadSettings4($(this).parent().attr('id'), $(this).attr('data-channel'));
    });

});



const settings1 = {
    one:{
        'Disable When Receiving From':'CH 02',
        'Trigger When Receiving From':'CH 99',
        'When Triggered Transmit On':'CH 01',
    },
    two:{
        'Transmit Every X Triggers': '2',
        'Disable When Receiving From': 'CH 03',
        'Trigger When Receiving From': 'CH 99',
        'When Triggered Transmit On': 'CH 01',
    },
    three:{
        'Transmit Every X Triggers': '3',
        'Disable When Receiving From': 'CH 04',
        'Trigger When Receiving From': 'CH 99',
        'When Triggered Transmit On': 'CH 01',
    },
    four:{
        'Transmit Every X Triggers': '4',
        'Disable When Receiving From': 'CH 05',
        'Trigger When Receiving From': 'CH 99',
        'When Triggered Transmit On': 'CH 01',
    },
    five:{
        'Transmit Every X Triggers': '5',
        'Disable When Receiving From': 'CH 06',
        'Trigger When Receiving From': 'CH 99',
        'When Triggered Transmit On': 'CH 01',
    },
    six:{
        'Transmit Every X Triggers': '6',
        'Disable When Receiving From': 'CH 07',
        'Trigger When Receiving From': 'CH 99',
        'When Triggered Transmit On': 'CH 01',
    },
    seven:{
        'Transmit Every X Triggers': '7',
        'Disable When Receiving From': 'CH 08',
        'Trigger When Receiving From': 'CH 99',
        'When Triggered Transmit On': 'CH 01',
    },
    eight:{
        'Transmit Every X Triggers': '8',
        'Disable When Receiving From': 'CH 09',
        'Trigger When Receiving From': 'CH 99',
        'When Triggered Transmit On': 'CH 01',
    },
    nine:{
        'Transmit Every X Triggers': '9',
        'Disable When Receiving From': 'CH 10',
        'Trigger When Receiving From': 'CH 99',
        'When Triggered Transmit On': 'CH 01',
    },
    ten:{
        'Transmit Every X Triggers': '10',
        'Disable When Receiving From': 'CH 11',
        'Trigger When Receiving From': 'CH 99',
        'When Triggered Transmit On': 'CH 01',
    },
    eleven:{
        'Transmit Every X Triggers': '11',
        'Disable When Receiving From': 'CH 12',
        'Trigger When Receiving From': 'CH 99',
        'When Triggered Transmit On': 'CH 01',
    },
    twelve:{
        'Transmit Every X Triggers': '12',
        'Disable When Receiving From': 'CH 13',
        'Trigger When Receiving From': 'CH 99',
        'When Triggered Transmit On': 'CH 01',
    },
    thirteen:{
        'Transmit Every X Triggers': '13',
        'Disable When Receiving From': 'CH 14',
        'Trigger When Receiving From': 'CH 99',
        'When Triggered Transmit On': 'CH 01',
    },
    fourteen:{
        'Transmit Every X Triggers': '14',
        'Disable When Receiving From': 'CH 15',
        'Trigger When Receiving From': 'CH 99',
        'When Triggered Transmit On': 'CH 01',
    },
    fifteen:{
        'Transmit Every X Triggers': '15',
        'Disable When Receiving From': 'CH 16',
        'Trigger When Receiving From': 'CH 99',
        'When Triggered Transmit On': 'CH 01',
    },
    sixteen:{
        'Transmit Every X Triggers': '16',
        'Trigger When Receiving From': 'CH 99',
        'When Triggered Transmit On': 'CH 01',
    }
};

//SETTINGS VICTORY ROYALE
const settings2 = {
    one:{
            },
    two:{
        'Enabled On Game Start': 'DISABLED',
        'Enable When Receiving From': 'CH 02',
        'Disable When Receiving From': 'CH 03',
        'Trigger When Receiving From': 'CH 100',
        'When Triggered Transmit On': 'CH 17'
    },
    three:{
        'Transmit Every X Triggers': '2',
        'Enabled On Game Start': 'DISABLED',
        'Enable When Receiving From': 'CH 03',
        'Disable When Receiving From': 'CH 04',
        'Trigger When Receiving From': 'CH 100',
        'When Triggered Transmit On': 'CH 17'
    },
    four:{
        'Transmit Every X Triggers': '3',
        'Enabled On Game Start': 'DISABLED',
        'Enable When Receiving From': 'CH 04',
        'Disable When Receiving From': 'CH 05',
        'Trigger When Receiving From': 'CH 100',
        'When Triggered Transmit On': 'CH 17'
    },
    five:{
        'Transmit Every X Triggers': '4',
        'Enabled On Game Start': 'DISABLED',
        'Enable When Receiving From': 'CH 05',
        'Disable When Receiving From': 'CH 06',
        'Trigger When Receiving From': 'CH 100',
        'When Triggered Transmit On': 'CH 17'
    },
    six:{
        'Transmit Every X Triggers': '5',
        'Enabled On Game Start': 'DISABLED',
        'Enable When Receiving From': 'CH 06',
        'Disable When Receiving From': 'CH 07',
        'Trigger When Receiving From': 'CH 100',
        'When Triggered Transmit On': 'CH 17'
    },
    seven:{
        'Transmit Every X Triggers': '6',
        'Enabled On Game Start': 'DISABLED',
        'Enable When Receiving From': 'CH 07',
        'Disable When Receiving From': 'CH 08',
        'Trigger When Receiving From': 'CH 100',
        'When Triggered Transmit On': 'CH 17'
    },
    eight:{
        'Transmit Every X Triggers': '7',
        'Enabled On Game Start': 'DISABLED',
        'Enable When Receiving From': 'CH 09',
        'Disable When Receiving From': 'CH 09',
        'Trigger When Receiving From': 'CH 100',
        'When Triggered Transmit On': 'CH 17'
    },
    nine:{
        'Transmit Every X Triggers': '8',
        'Enabled On Game Start': 'DISABLED',
        'Enable When Receiving From': 'CH 09',
        'Disable When Receiving From': 'CH 10',
        'Trigger When Receiving From': 'CH 100',
        'When Triggered Transmit On': 'CH 17'
    },
    ten:{
        'Transmit Every X Triggers': '9',
        'Enabled On Game Start': 'DISABLED',
        'Enable When Receiving From': 'CH 10',
        'Disable When Receiving From': 'CH 11',
        'Trigger When Receiving From': 'CH 100',
        'When Triggered Transmit On': 'CH 17'
    },
    eleven:{
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
    }
};

//SETTINGS Top 5
const settings3 = {
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
        'Enable When Receiving From': 'CH 09',
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
    }
};

//SETTINGS VICTORY ROYALE
const settings4 = {
    one:{
            },
    two:{

    },
    three:{

    },
    four:{
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
        'Enable When Receiving From': 'CH 09',
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
    }
};

function loadSettings1(parent, channel){
    $('aside ul').html('');
    for (let [key, value] of Object.entries(settings1[channel])) {
        //<li>Triggered by Player <span>OFF</span></li>
        $(`<li style="display: none;">${key}<span>${value}</span></li>`).appendTo('aside ul').slideDown('fast');
      }
}

function loadSettings2(parent, channel){
    $('aside ul').html('');
    for (let [key, value] of Object.entries(settings2[channel])) {
        //<li>Triggered by Player <span>OFF</span></li>
        $(`<li style="display: none;">${key}<span>${value}</span></li>`).appendTo('aside ul').slideDown('fast');
      }
}

function loadSettings3(parent, channel){
    $('aside ul').html('');
    for (let [key, value] of Object.entries(settings3[channel])) {
        //<li>Triggered by Player <span>OFF</span></li>
        $(`<li style="display: none;">${key}<span>${value}</span></li>`).appendTo('aside ul').slideDown('fast');
      }
}

function loadSettings4(parent, channel){
    $('aside ul').html('');
    for (let [key, value] of Object.entries(settings4[channel])) {
        //<li>Triggered by Player <span>OFF</span></li>
        $(`<li style="display: none;">${key}<span>${value}</span></li>`).appendTo('aside ul').slideDown('fast');
      }
}
