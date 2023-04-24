
export class rmaFaultSelectionService {

    mainCategory = {
        title: 'Battery',
        id: 1
    };
    subcategory = {
        title: 'Battery TC2x change request',
        parentId: 1
    };

    mainGroups = [
        {
            title: 'Battery',
            id: 1
        },
        {
            title: 'Cable',
            id: 2
        },
        {
            title: 'Camera',
            id: 3
        },
        {
            title: 'Charging',
            id: 4
        },
        {
            title: 'Communication',
            id: 5
        },
        {
            title: 'Cradle',
            id: 6
        },
        {
            title: 'Damage',
            id: 7
        },
        {
            title: 'Display',
            id: 8
        },
        {
            title: 'Docking',
            id: 9
        },
        {
            title: 'Fan',
            id: 10
        },
        {
            title: 'Keyboard',
            id: 11
        },
        {
            title: 'Laser',
            id: 12
        },
        {
            title: 'Led',
            id: 13
        },
        {
            title: 'Lockup/Reset',
            id: 14
        },
        {
            title: 'Memory',
            id: 15
        },
        {
            title: 'Others',
            id: 16
        },
        {
            title: 'Payment Terminal',
            id: 17
        },
        {
            title: 'Power',
            id: 18
        },
        {
            title: 'Printer',
            id: 19
        },
        {
            title: 'Software',
            id: 20
        },
        {
            title: 'Speaker',
            id: 21
        },
        {
            title: 'Touch Panel',
            id: 22
        },
        {
            title: 'Trigger',
            id: 23
        },
        {
            title: 'Wand',
            id: 24
        }
    ]

    subCategories = [
        //Battery
        {
            title: 'Battery TC2x change request',
            parentId: 1,
            parent: 'Battery'
        },
        {
            title: 'Battery backup',
            parentId: 1,
            parent: 'Battery'
        },
        {
            title: 'Battery broken conn or wire',
            parentId: 1,
            parent: 'Battery'
        },
        {
            title: 'Battery drain problem',
            parentId: 1,
            parent: 'Battery'
        },
        {
            title: 'Battery general problem',
            parentId: 1,
            parent: 'Battery'
        },
        {
            title: 'Battery won\'t charge',
            parentId: 1,
            parent: 'Battery'
        },
        {
            title: 'Battery won\'t hold charge',
            parentId: 1,
            parent: 'Battery'
        },

        //Cable
        {
            title: 'Cable connector',
            parentId: 2,
            parent: 'Cable'
        },
        {
            title: 'Cable cut',
            parentId: 2,
            parent: 'Cable'
        },
        {
            title: 'Cable general problem',
            parentId: 2,
            parent: 'Cable'
        },
        {
            title: 'Cable intermittent',
            parentId: 2,
            parent: 'Cable'
        },
        {
            title: 'Cable loose',
            parentId: 2,
            parent: 'Cable'
        },
        {
            title: 'Cable worn',
            parentId: 2,
            parent: 'Cable'
        },

        //Camera
        {
            title: 'Camera error message',
            parentId: 3,
            parent: 'Camera'
        },
        {
            title: 'Camera image failure',
            parentId: 3,
            parent: 'Camera'
        },
        {
            title: 'Camera no decode',
            parentId: 3,
            parent: 'Camera'
        },

        //Charger
        {
            title: 'Charger general problem',
            parentId: 4,
            parent: 'Charging'

        },
        {
            title: 'Charger not charging',
            parentId: 4,
            parent: 'Charging'
        },
        {
            title: 'Charger over charging',
            parentId: 4,
            parent: 'Charging'
        },

        //Communication
        {
            title: 'Comms CC Chip reader error',
            parentId: 5,
            parent: 'Communication'
        },
        {
            title: 'Comms finger print reader',
            parentId: 5,
            parent: 'Communication'
        },
        {
            title: 'Comms mag stripe reader',
            parentId: 5,
            parent: 'Communication'
        },
        {
            title: 'Comms wrong rf card type',
            parentId: 5,
            parent: 'Communication'
        },
        {
            title: 'Communication NFC issue',
            parentId: 5,
            parent: 'Communication'
        },
        {
            title: 'Communication SIM slot issue',
            parentId: 5,
            parent: 'Communication'
        },
        {
            title: 'Communication USB',
            parentId: 5,
            parent: 'Communication'
        },
        {
            title: 'Communication bluetooth',
            parentId: 5,
            parent: 'Communication'
        },
        {
            title: 'Communication general problem',
            parentId: 5,
            parent: 'Communication'
        },
        {
            title: 'Communication interface',
            parentId: 5,
            parent: 'Communication'
        },
        {
            title: 'Communication loose gprs conn',
            parentId: 5,
            parent: 'Communication'
        },
        {
            title: 'Communication modem',
            parentId: 5,
            parent: 'Communication'
        },
        {
            title: 'Communication optical/ir',
            parentId: 5,
            parent: 'Communication'
        },
        {
            title: 'Communication printer',
            parentId: 5,
            parent: 'Communication'
        },
        {
            title: 'Communication range/coverage',
            parentId: 5,
            parent: 'Communication'
        },
        {
            title: 'Communication voice/calls',
            parentId: 5,
            parent: 'Communication'
        },
        {
            title: 'Communication wifi',
            parentId: 5,
            parent: 'Communication'
        },
        {
            title: 'Communication int problem',
            parentId: 5,
            parent: 'Communication'
        },

        {
            title: 'Communication low signal',
            parentId: 5,
            parent: 'Communication'
        },
        {
            title: 'Communication not connect',
            parentId: 5,
            parent: 'Communication'
        },
        {
            title: 'Gps general problem',
            parentId: 5,
            parent: 'Communication'
        },
        {
            title: 'Gps intermittent problem',
            parentId: 5,
            parent: 'Communication'
        },
        {
            title: 'Gps loose position',
            parentId: 5,
            parent: 'Communication'
        },
        {
            title: 'Gps low signal',
            parentId: 5,
            parent: 'Communication'
        },
        //Cradle
        {
            title: 'Cradle no charge/power',
            parentId: 6,
            parent: 'Cradle'
        },
        {
            title: 'Cradle no ethernet',
            parentId: 6,
            parent: 'Cradle'
        },
        //Damage
        {
            title: 'Damage antenna',
            parentId: 7,
            parent: 'Damage'
        },
        {
            title: 'Damage antenna mount',
            parentId: 7,
            parent: 'Damage'
        },
        {
            title: 'Damage battery',
            parentId: 7,
            parent: 'Damage'
        },
        {
            title: 'Damage by water',
            parentId: 7,
            parent: 'Damage'
        },
        {
            title: 'Damage case major damage',
            parentId: 7,
            parent: 'Damage'
        },
        {
            title: 'Damage case minor damage',
            parentId: 7,
            parent: 'Damage'
        },
        {
            title: 'Damage connector',
            parentId: 7,
            parent: 'Damage'
        },
        {
            title: 'Damage end cap',
            parentId: 7,
            parent: 'Damage'
        },
        {
            title: 'Damage general problem',
            parentId: 7,
            parent: 'Damage'
        },
        {
            title: 'Damage handle',
            parentId: 7,
            parent: 'Damage'
        },
        {
            title: 'Damage main board/pcb',
            parentId: 7,
            parent: 'Damage'
        },
        {
            title: 'Damage printer latch broken',
            parentId: 7,
            parent: 'Damage'
        },
        {
            title: 'Damage reset button',
            parentId: 7,
            parent: 'Damage'
        },
        {
            title: 'Damage scan engine',
            parentId: 7,
            parent: 'Damage'
        },
        {
            title: 'Damage scan head housing',
            parentId: 7,
            parent: 'Damage'
        },
        {
            title: 'Damage tp & display unit',
            parentId: 7,
            parent: 'Damage'
        },
        {
            title: 'Damage tp or display',
            parentId: 7,
            parent: 'Damage'
        },
        {
            title: 'Damage trigger',
            parentId: 7,
            parent: 'Damage'
        },
        {
            title: 'Damage warranty seal',
            parentId: 7,
            parent: 'Damage'
        },
        {
            title: 'Damage window/lens',
            parentId: 7,
            parent: 'Damage'
        },
        //Display
        {
            title: 'Display backlight',
            parentId: 8,
            parent: 'Display'
        },
        {
            title: 'Display colour distortion',
            parentId: 8,
            parent: 'Display'
        },
        {
            title: 'Display debris',
            parentId: 8,
            parent: 'Display'
        },
        {
            title: 'Display does not display',
            parentId: 8,
            parent: 'Display'
        },
        {
            title: 'Display general problem',
            parentId: 8,
            parent: 'Display'
        },
        {
            title: 'Display intermittent problem',
            parentId: 8,
            parent: 'Display'
        },
        {
            title: 'Display lines',
            parentId: 8,
            parent: 'Display'
        },
        {
            title: 'Display missing characters',
            parentId: 8,
            parent: 'Display'
        },
        {
            title: 'Display problem (no tp)',
            parentId: 8,
            parent: 'Display'
        },
        {
            title: 'Display resolution',
            parentId: 8,
            parent: 'Display'
        },
        //Docking
        {
            title: 'Docking general failure',
            parentId: 9,
            parent: 'Docking'
        },
        //Fan
        {
            title: 'Fan general problem',
            parentId: 10,
            parent: 'Fan'
        },
        //Keyboard
        {
            title: 'Keyboard backlight',
            parentId: 11,
            parent: 'Keyboard'
        },
        {
            title: 'Keyboard double key entry',
            parentId: 11,
            parent: 'Keyboard'
        },
        {
            title: 'Keyboard general problem',
            parentId: 11,
            parent: 'Keyboard'
        },
        {
            title: 'Keyboard intermittent problem',
            parentId: 11,
            parent: 'Keyboard'
        },
        {
            title: 'Keyboard keys not functional',
            parentId: 11,
            parent: 'Keyboard'
        },
        {
            title: 'Keyboard missing keys',
            parentId: 11,
            parent: 'Keyboard'
        },
        {
            title: 'Keyboard sticking keys',
            parentId: 11,
            parent: 'Keyboard'
        },
        {
            title: 'Keyboard worn keys',
            parentId: 11,
            parent: 'Keyboard'
        },
        {
            title: 'Keyboard wrong mapping or bios',
            parentId: 11,
            parent: 'Keyboard'
        },
        //Laser
        {
            title: 'Laser alignment/beam size',
            parentId: 12,
            parent: 'Laser'
        },
        {
            title: 'Laser general problem',
            parentId: 12,
            parent: 'Laser'
        },
        {
            title: 'Laser intermittent',
            parentId: 12,
            parent: 'Laser'
        },
        {
            title: 'Laser no beam',
            parentId: 12,
            parent: 'Laser'
        },
        {
            title: 'Laser no decode',
            parentId: 12,
            parent: 'Laser'
        },
        {
            title: 'Laser scan line speed',
            parentId: 12,
            parent: 'Laser'
        },
        {
            title: 'Laser weak/dim beam',
            parentId: 12,
            parent: 'Laser'
        },
        //Led
        {
            title: 'Led flickering',
            parentId: 13,
            parent: 'Led'
        },
        {
            title: 'Led general problem',
            parentId: 13,
            parent: 'Led'
        },
        //Lockup/Reset
        {
            title: 'Lockup general problem',
            parentId: 14,
            parent: 'Lockup/Reset'
        },
        {
            title: 'Lockup intermittent',
            parentId: 14,
            parent: 'Lockup/Reset'
        },
        {
            title: 'Reset general problem',
            parentId: 14,
            parent: 'Lockup/Reset'
        },
        {
            title: 'Reset unexpected reboots',
            parentId: 14,
            parent: 'Lockup/Reset'
        },
        //Memory
        {
            title: 'Disk general problem',
            parentId: 15,
            parent: 'Memory'
        },
        {
            title: 'Disk power problem',
            parentId: 15,
            parent: 'Memory'
        },
        {
            title: 'Disk read/write problem',
            parentId: 15,
            parent: 'Memory'
        },
        {
            title: 'Memory error',
            parentId: 15,
            parent: 'Memory'
        },
        {
            title: 'Memory general problem',
            parentId: 15,
            parent: 'Memory'
        },
        {
            title: 'Memory insufficient',
            parentId: 15,
            parent: 'Memory'
        },
        {
            title: 'Memory intermittent',
            parentId: 15,
            parent: 'Memory'
        },
        {
            title: 'Memory sd card r/w issue',
            parentId: 15,
            parent: 'Memory'
        },
        //Others

        {
            title: 'Error received (see notes)',
            parentId: 16,
            parent: 'Others'
        },
        {
            title: 'Unspecified',
            parentId: 16,
            parent: 'Others'
        },
        //Payment Terminal
        {
            title: 'PT CC Chip reader error',
            parentId: 17,
            parent: 'Payment Terminal'
        },
        {
            title: 'PT Display problem (no tp)',
            parentId: 17,
            parent: 'Payment Terminal'
        },
        {
            title: 'PT Keyboard not functional',
            parentId: 17,
            parent: 'Payment Terminal'
        },
        {
            title: 'PT Mag stripe reader',
            parentId: 17,
            parent: 'Payment Terminal'
        },
        {
            title: 'PT No Power',
            parentId: 17,
            parent: 'Payment Terminal'
        },
        {
            title: 'PT Not Charging',
            parentId: 17,
            parent: 'Payment Terminal'
        },
        {
            title: 'PT/Device Separated',
            parentId: 17,
            parent: 'Payment Terminal'
        },
        //Power
        {
            title: 'Power does not work',
            parentId: 18,
            parent: 'Power'
        },
        {
            title: 'Power general problem',
            parentId: 18,
            parent: 'Power'
        },
        {
            title: 'Power intermittent',
            parentId: 18,
            parent: 'Power'
        },
        {
            title: 'Power overheating',
            parentId: 18,
            parent: 'Power'
        },
        {
            title: 'Power shortage',
            parentId: 18,
            parent: 'Power'
        },
        {
            title: 'Power won\'t power up',
            parentId: 18,
            parent: 'Power'
        },
        //Printer
        {
            title: 'Printer bad/broken gear',
            parentId: 19,
            parent: 'Printer'
        },
        {
            title: 'Printer cable',
            parentId: 19,
            parent: 'Printer'
        },
        {
            title: 'Printer calibration issue',
            parentId: 19,
            parent: 'Printer'
        },
        {
            title: 'Printer communication problem',
            parentId: 19,
            parent: 'Printer'
        },
        {
            title: 'Printer cover will not close',
            parentId: 19,
            parent: 'Printer'
        },
        {
            title: 'Printer cutter issue',
            parentId: 19,
            parent: 'Printer'
        },
        {
            title: 'Printer feed',
            parentId: 19,
            parent: 'Printer'
        },
        {
            title: 'Printer general problem',
            parentId: 19,
            parent: 'Printer'
        },
        {
            title: 'Printer head problem',
            parentId: 19,
            parent: 'Printer'
        },
        {
            title: 'Printer media arm broken',
            parentId: 19,
            parent: 'Printer'
        },
        {
            title: 'Printer media cover issue',
            parentId: 19,
            parent: 'Printer'
        },
        {
            title: 'Printer paper jam',
            parentId: 19,
            parent: 'Printer'
        },
        {
            title: 'Printer printing quality',
            parentId: 19,
            parent: 'Printer'
        },
        {
            title: 'Printer ribbon issue',
            parentId: 19,
            parent: 'Printer'
        },
        {
            title: 'Printer roller issue',
            parentId: 19,
            parent: 'Printer'
        },
        //Sofware
        {
            title: 'Downgrade',
            parentId: 20,
            parent: 'Sofware'
        },
        {
            title: 'Software application problem',
            parentId: 20,
            parent: 'Sofware'
        },
        {
            title: 'Software bios general problem',
            parentId: 20,
            parent: 'Sofware'
        },
        {
            title: 'Software configuration issue',
            parentId: 20,
            parent: 'Sofware'
        },
        {
            title: 'Sofware does not load',
            parentId: 20,
            parent: 'Sofware'
        },
        {
            title: 'Software error',
            parentId: 20,
            parent: 'Sofware'
        },
        {
            title: 'Software general problem',
            parentId: 20,
            parent: 'Sofware'
        },
        {
            title: 'Software int applic problem',
            parentId: 20,
            parent: 'Sofware'
        },
        {
            title: 'Software revision/version',
            parentId: 20,
            parent: 'Sofware'
        },
        {
            title: 'Sofware wrong os',
            parentId: 20,
            parent: 'Sofware'
        },
        {
            title: 'Software wrong service pack',
            parentId: 20,
            parent: 'Sofware'
        },
        {
            title: 'Upgrade',
            parentId: 20,
            parent: 'Sofware'
        },
        //Speaker
        {
            title: 'Speaker audio jack problem',
            parentId: 21,
            parent: 'Speaker'
        },
        {
            title: 'Speaker intermittent',
            parentId: 21,
            parent: 'Speaker'
        },
        {
            title: 'Speaker low volume',
            parentId: 21,
            parent: 'Speaker'
        },
        {
            title: 'Speaker no sound',
            parentId: 21,
            parent: 'Speaker'
        },
        //Touch Panel
        {
            title: 'Touch panel & display problem',
            parentId: 22,
            parent: 'Touch Panel'
        },
        {
            title: 'Touch panel callibration',
            parentId: 22,
            parent: 'Touch Panel'
        },
        {
            title: 'Touch panel does not work',
            parentId: 22,
            parent: 'Touch Panel'
        },
        {
            title: 'Touch panel incorrect reaction',
            parentId: 22,
            parent: 'Touch Panel'
        },
        {
            title: 'Touch panel problem',
            parentId: 22,
            parent: 'Touch Panel'
        },

        //Trigger
        {
            title: 'Trigger intermittent',
            parentId: 23,
            parent: 'Trigger'
        },
        {
            title: 'Trigger not work',
            parentId: 23,
            parent: 'Trigger'
        },
        {
            title: 'Trigger scan button not work',
            parentId: 23,
            parent: 'Trigger'
        },

        //Wand
        {
            title: 'Wand broken tip',
            parentId: 24,
            parent: 'Wand'
        },
        {
            title: 'Wand dirty tip',
            parentId: 24,
            parent: 'Wand'
        },
        {
            title: 'Wand general problem',
            parentId: 24,
            parent: 'Wand'
        },
        {
            title: 'Wand missing tip',
            parentId: 24,
            parent: 'Wand'
        },
        {
            title: 'Wand no beam/decode',
            parentId: 24,
            parent: 'Wand'
        }
    ]
}



function getMockSelection() {
    return [
        {
            name: "Battery",
            children: [
                "Battery TC2x change request",
                "Battery backup",
                "Battery broken conn or wire",
                "Battery drain problem",
                "Battery general problem",
                "Battery won't charge",
                "Battery won't hold charge",


            ]
        },
        {
            name: "Cable",
            children: [
                "Cable connector",
                "Cable cut",
                "Cable general problem",
                "Cable intermittent",
                "Cable loose",
                "Cable worn"


            ]
        },
        {
            name: "Camera",
            children: [
                "Camera error message",
                "Camera image failure",
                "Camera no decode"


            ]
        }
    ];
}
