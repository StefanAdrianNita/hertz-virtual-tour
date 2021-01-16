var APP_DATA = {
  "scenes": [
    {
      "id": "0-atrio",
      "name": "Atrio",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -1.9650705346339343,
        "pitch": 0.09869447937023068,
        "fov": 1.3497101748081497
      },
      "linkHotspots": [
        {
          "yaw": 1.2311704887422241,
          "pitch": 0.2531968124060917,
          "rotation": 0,
          "target": "2-atrio-corridoio"
        },
        {
          "yaw": 2.5487859737390384,
          "pitch": 0.251279975489453,
          "rotation": 0.7853981633974483,
          "target": "3-atrio-vicepresidenza"
        },
        {
          "yaw": -0.6672819571525075,
          "pitch": 0.21062597279174788,
          "rotation": 5.497787143782138,
          "target": "1-biblioteca"
        },
        {
          "yaw": -0.07954103768512155,
          "pitch": 0.18928829220054055,
          "rotation": 0.7853981633974483,
          "target": "29-atrio-esterno"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.0919369039044753,
          "pitch": 0.12302483408664422,
          "title": "Segreteria",
          "text": "Bancone della segreteria <br>"
        }
      ]
    },
    {
      "id": "1-biblioteca",
      "name": "Biblioteca",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 2.6619064273873656,
        "pitch": 0.0075575921172728044,
        "fov": 1.3497101748081497
      },
      "linkHotspots": [
        {
          "yaw": 2.752347798827836,
          "pitch": 0.13550899062885158,
          "rotation": 0.7853981633974483,
          "target": "0-atrio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-atrio-corridoio",
      "name": "Atrio Corridoio",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.38144366888306,
        "pitch": 0.137007845765595,
        "fov": 1.3497101748081497
      },
      "linkHotspots": [
        {
          "yaw": -1.7314951875843825,
          "pitch": 0.2533129462620636,
          "rotation": 0,
          "target": "0-atrio"
        },
        {
          "yaw": 0.35815768076999177,
          "pitch": 0.2253463352148799,
          "rotation": 0,
          "target": "4-corridoio-multimediale"
        },
        {
          "yaw": -2.777486191187265,
          "pitch": 0.18528440781094524,
          "rotation": 0,
          "target": "3-atrio-vicepresidenza"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-atrio-vicepresidenza",
      "name": "Atrio Vicepresidenza",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 2.7906994918631396,
        "pitch": 0.09581897564315511,
        "fov": 1.3497101748081497
      },
      "linkHotspots": [
        {
          "yaw": 0.411248667537345,
          "pitch": 0.18265627643625848,
          "rotation": 0,
          "target": "2-atrio-corridoio"
        },
        {
          "yaw": -0.6747440242264311,
          "pitch": 0.27715599718708006,
          "rotation": 6.283185307179586,
          "target": "0-atrio"
        },
        {
          "yaw": -2.443782448318169,
          "pitch": -0.2782656726351469,
          "rotation": 6.283185307179586,
          "target": "11-corridoio-secondo-piano-informatica"
        },
        {
          "yaw": -2.603245340878571,
          "pitch": 0.08792700553672539,
          "rotation": 1.5707963267948966,
          "target": "30-palestra"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.2997382400331787,
          "pitch": -0.27133473177740797,
          "title": "Secondo Piano<br>",
          "text": "Da qui si arriva al secondo piano<br>"
        },
        {
          "yaw": 1.908928817980164,
          "pitch": 0.10577849341831147,
          "title": "Vicepresidenza",
          "text": "Ufficio del Vicepreside<br>"
        },
        {
          "yaw": 3.0757431230079693,
          "pitch": 0.07118046318246485,
          "title": "Didattica",
          "text": "Ufficio della didattica<br>"
        }
      ]
    },
    {
      "id": "4-corridoio-multimediale",
      "name": "Corridoio Multimediale",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.41292489722223635,
        "pitch": 0.13445982096946807,
        "fov": 1.3497101748081497
      },
      "linkHotspots": [
        {
          "yaw": -2.823582366200954,
          "pitch": 0.2191043309703833,
          "rotation": 0,
          "target": "2-atrio-corridoio"
        },
        {
          "yaw": 0.3616581480454748,
          "pitch": 0.15374717239027724,
          "rotation": 0,
          "target": "10-corridoio-informatica"
        },
        {
          "yaw": -1.8342799320933256,
          "pitch": 0.5197416009349443,
          "rotation": 4.71238898038469,
          "target": "6-corridoio-elettronica"
        },
        {
          "yaw": -1.6225152899501243,
          "pitch": 0.20180221060360815,
          "rotation": 5.497787143782138,
          "target": "7-corridoio-secondo-piano"
        },
        {
          "yaw": -1.2636615842414827,
          "pitch": 0.2319066994332104,
          "rotation": 0,
          "target": "5-aula-multimediale"
        },
        {
          "yaw": 0.63198839251028,
          "pitch": 0.15613388610137058,
          "rotation": 0,
          "target": "20-aula-biennio"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.786549269051509,
          "pitch": 0.4230649281519554,
          "title": "Laboratori di Elettronica<br>",
          "text": "Scendendo le scale si arriva ai laboratori di elettronica situati al piano terra<br>"
        },
        {
          "yaw": -1.6053034039465217,
          "pitch": 0.09588089264661903,
          "title": "Secondo Piano<br>",
          "text": "Da qui si sale per il secondo piano<br>"
        },
        {
          "yaw": -1.1477334051837875,
          "pitch": 0.07614950687761635,
          "title": "Aula Multimediale<br>",
          "text": "Laboratorio di Inglese<br>"
        },
        {
          "yaw": 0.7057950535801893,
          "pitch": 0.04420624135126516,
          "title": "Aula",
          "text": "Un esempio di aula del biennio<br>"
        }
      ]
    },
    {
      "id": "5-aula-multimediale",
      "name": "Aula Multimediale",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 2.9199745421558205,
        "pitch": 0.14291796068405382,
        "fov": 1.3497101748081497
      },
      "linkHotspots": [
        {
          "yaw": 2.6987612477269236,
          "pitch": 0.1580074339206874,
          "rotation": 0.7853981633974483,
          "target": "4-corridoio-multimediale"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-corridoio-elettronica",
      "name": "Corridoio Elettronica",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -2.8882579792108274,
        "pitch": 0.051790095510551026,
        "fov": 1.3497101748081497
      },
      "linkHotspots": [
        {
          "yaw": -0.842744797679817,
          "pitch": 0.1264868940735937,
          "rotation": 0.7853981633974483,
          "target": "4-corridoio-multimediale"
        },
        {
          "yaw": -2.835249303796699,
          "pitch": 0.12947827180973803,
          "rotation": 6.283185307179586,
          "target": "21-laboratorio-elettronica-n2"
        },
        {
          "yaw": -2.995783685047792,
          "pitch": 0.3029011721659707,
          "rotation": 4.71238898038469,
          "target": "23-laboratorio-elettronica-n1"
        },
        {
          "yaw": -2.524614246806058,
          "pitch": 0.21817638788825633,
          "rotation": 0.7853981633974483,
          "target": "24-piazzale-elettronica"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.7014055563982708,
          "pitch": 0.030883477883730137,
          "title": "Laboratorio di Disegno<br>",
          "text": "Laboratorio di disegno tecnico per il biennio<br>"
        }
      ]
    },
    {
      "id": "7-corridoio-secondo-piano",
      "name": "Corridoio Secondo Piano",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.6136352592593397,
        "pitch": 0.14415294339784523,
        "fov": 1.3497101748081497
      },
      "linkHotspots": [
        {
          "yaw": -1.4947834530500792,
          "pitch": 0.12611204745306814,
          "rotation": 5.497787143782138,
          "target": "8-aula-conferenze"
        },
        {
          "yaw": -1.8672535580854763,
          "pitch": 0.30671621705038987,
          "rotation": 10.210176124166829,
          "target": "4-corridoio-multimediale"
        },
        {
          "yaw": 0.3445381662538196,
          "pitch": 0.12828676685978024,
          "rotation": 0,
          "target": "13-corridoio-secondo-piano-chimica"
        },
        {
          "yaw": 0.5803802602166321,
          "pitch": 0.09135614895740929,
          "rotation": 0.7853981633974483,
          "target": "9-aula-triennio"
        },
        {
          "yaw": -2.7807672237928607,
          "pitch": 0.1684596385651531,
          "rotation": 0,
          "target": "11-corridoio-secondo-piano-informatica"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.456893447133499,
          "pitch": 0.017292223090390024,
          "title": "Aula Conferenze<br>",
          "text": "Aula dove vengono tenute le conferenze extra-scolastiche<br>"
        },
        {
          "yaw": -1.8425270057036478,
          "pitch": 0.18897930526948592,
          "title": "Primo piano<br>",
          "text": "Da qui si scende per il primo piano<br>"
        },
        {
          "yaw": 0.6888806073673877,
          "pitch": -0.034672936297198476,
          "title": "Aula",
          "text": "Un esempio di aula del triennio<br>"
        }
      ]
    },
    {
      "id": "8-aula-conferenze",
      "name": "Aula Conferenze",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -2.780935452351848,
        "pitch": 0.01691033170578571,
        "fov": 1.3497101748081497
      },
      "linkHotspots": [
        {
          "yaw": 2.6138202153748296,
          "pitch": 0.11280589140491237,
          "rotation": 7.0685834705770345,
          "target": "7-corridoio-secondo-piano"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-aula-triennio",
      "name": "Aula Triennio",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -2.7808858530395177,
        "pitch": 0.016363405497450856,
        "fov": 1.3497101748081497
      },
      "linkHotspots": [
        {
          "yaw": 2.7879859532143616,
          "pitch": 0.194331772638364,
          "rotation": 4.71238898038469,
          "target": "7-corridoio-secondo-piano"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-corridoio-informatica",
      "name": "Corridoio Informatica",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.5539562642679208,
        "pitch": 0.171032078517122,
        "fov": 1.3497101748081497
      },
      "linkHotspots": [
        {
          "yaw": -2.8255575503098367,
          "pitch": 0.13550516390888845,
          "rotation": 0,
          "target": "4-corridoio-multimediale"
        },
        {
          "yaw": -1.2795565706153926,
          "pitch": 0.2733381080285753,
          "rotation": 0,
          "target": "12-laboratorio-di-informatica"
        },
        {
          "yaw": -1.6574021869021855,
          "pitch": 0.21505661931102438,
          "rotation": 5.497787143782138,
          "target": "13-corridoio-secondo-piano-chimica"
        },
        {
          "yaw": 0.5960285817526465,
          "pitch": 0.06370051361459872,
          "rotation": 1.5707963267948966,
          "target": "19-laboratorio-informatica-musicale"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.044224119857592115,
          "pitch": -0.0018518442954160719,
          "title": "Bagni",
          "text": "Bagni degli studenti<br>"
        },
        {
          "yaw": -1.19462755824493,
          "pitch": 0.015232132761237693,
          "title": "Laboratorio di Informatica<br>",
          "text": "Laboratorio di informatica del triennio<br>"
        },
        {
          "yaw": -1.6498514523689973,
          "pitch": 0.09955822025047567,
          "title": "Secondo Piano<br>",
          "text": "Da qui si arriva ai laboratori di Chimica e Fisica situati al secondo piano<br>"
        },
        {
          "yaw": 0.6088565769121796,
          "pitch": -0.037123797553309856,
          "title": "Laboratorio di informatica musicale<br>",
          "text": "Laboratorio di Informatica Musicale<br>"
        }
      ]
    },
    {
      "id": "11-corridoio-secondo-piano-informatica",
      "name": "Corridoio Secondo Piano Informatica",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -1.8241341206684965,
        "pitch": 0.002948504270847252,
        "fov": 1.3497101748081497
      },
      "linkHotspots": [
        {
          "yaw": 0.4059530671298006,
          "pitch": 0.19469811087860833,
          "rotation": 0,
          "target": "7-corridoio-secondo-piano"
        },
        {
          "yaw": -1.16444121022678,
          "pitch": 0.1157545701222702,
          "rotation": 0,
          "target": "16-pcto"
        },
        {
          "yaw": -1.2697789735282186,
          "pitch": 0.23103543795336456,
          "rotation": 4.71238898038469,
          "target": "18-sistemi-e-reti"
        },
        {
          "yaw": -0.9595301335026676,
          "pitch": 0.20327685993750322,
          "rotation": 1.5707963267948966,
          "target": "17-net"
        },
        {
          "yaw": -2.703178904979005,
          "pitch": 0.19123832041565336,
          "rotation": 0.7853981633974483,
          "target": "3-atrio-vicepresidenza"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.161465457761274,
          "pitch": -0.027526756506023986,
          "title": "Laboratorio PCTO<br>",
          "text": "Laboratorio utilizzato per i progetti con collaboratori esterni, forniti di stampanti 3D<br>"
        },
        {
          "yaw": -1.3664475814709895,
          "pitch": 0.13916654923894534,
          "title": "Laboratorio di Sistemi e Reti<br>",
          "text": "Procedendo sulla sinistra si arriva al laboratorio di Sistemi e Reti<br>"
        },
        {
          "yaw": -0.8690018982713301,
          "pitch": 0.11213053738929624,
          "title": "Laboratorio Net<br>",
          "text": "Procedendo sulla destra si arriva al laboratorio di Net<br>"
        },
        {
          "yaw": -2.5704090135759863,
          "pitch": 0.12813346591047292,
          "title": "Primo Piano<br>",
          "text": "Da qui si raggiungono le scale che portano al primo piano<br>"
        }
      ]
    },
    {
      "id": "12-laboratorio-di-informatica",
      "name": "Laboratorio di Informatica",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -2.795674191407226,
        "pitch": 0.03419151936619258,
        "fov": 1.3497101748081497
      },
      "linkHotspots": [
        {
          "yaw": 1.1668567968356491,
          "pitch": 0.29124402916883874,
          "rotation": 0,
          "target": "10-corridoio-informatica"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-corridoio-secondo-piano-chimica",
      "name": "Corridoio Secondo Piano Chimica",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.7102542525605919,
        "pitch": 0.17095759683094514,
        "fov": 1.3497101748081497
      },
      "linkHotspots": [
        {
          "yaw": -1.3793868061686005,
          "pitch": 0.1624136183859175,
          "rotation": 4.71238898038469,
          "target": "14-laboratorio-di-chimica"
        },
        {
          "yaw": -1.0915742203254553,
          "pitch": 0.14619842023912,
          "rotation": 7.853981633974483,
          "target": "15-laboratorio-di-fisica"
        },
        {
          "yaw": -1.94485770051244,
          "pitch": 0.30168826736569443,
          "rotation": 10.210176124166829,
          "target": "10-corridoio-informatica"
        },
        {
          "yaw": -2.8272559301421794,
          "pitch": 0.17184063169381503,
          "rotation": 0,
          "target": "7-corridoio-secondo-piano"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.385429937867471,
          "pitch": 0.02987836385068121,
          "title": "Laboratorio di Chimica<br>",
          "text": "Laboratorio di chimica del biennio<br>"
        },
        {
          "yaw": -1.1018643679254119,
          "pitch": 0.033127545767618116,
          "title": "Laboratorio di Fisica<br>",
          "text": "Laboratorio di fisica del biennio<br>"
        },
        {
          "yaw": -1.8858047645305511,
          "pitch": 0.21375474508880643,
          "title": "Primo Piano<br>",
          "text": "Da qui si scende per il primo piano<br>"
        },
        {
          "yaw": 0.16942828931638587,
          "pitch": -0.026256036273476724,
          "title": "Bagni",
          "text": "Bagno degli studenti<br>"
        }
      ]
    },
    {
      "id": "14-laboratorio-di-chimica",
      "name": "Laboratorio di Chimica",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -1.9804112641362508,
        "pitch": -0.01674629123062843,
        "fov": 1.3497101748081497
      },
      "linkHotspots": [
        {
          "yaw": 1.0373418448865976,
          "pitch": 0.11223402652525927,
          "rotation": 5.497787143782138,
          "target": "13-corridoio-secondo-piano-chimica"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-laboratorio-di-fisica",
      "name": "Laboratorio di Fisica",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -2.8104754397317,
        "pitch": 0.13714513694358388,
        "fov": 1.3497101748081497
      },
      "linkHotspots": [
        {
          "yaw": 2.9882547588733015,
          "pitch": 0.1682749323840831,
          "rotation": 5.497787143782138,
          "target": "13-corridoio-secondo-piano-chimica"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-pcto",
      "name": "PCTO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 1.3143719022413762,
        "pitch": 0.10271866222804782,
        "fov": 1.3497101748081497
      },
      "linkHotspots": [
        {
          "yaw": 1.2962565342013832,
          "pitch": 0.26087560988026226,
          "rotation": 0.7853981633974483,
          "target": "11-corridoio-secondo-piano-informatica"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-net",
      "name": "NET",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -2.4116779308268743,
        "pitch": 0.10000828311668108,
        "fov": 1.3497101748081497
      },
      "linkHotspots": [
        {
          "yaw": -0.7462285711722991,
          "pitch": 0.2055302859387016,
          "rotation": 0.7853981633974483,
          "target": "11-corridoio-secondo-piano-informatica"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-sistemi-e-reti",
      "name": "SISTEMI e RETI",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -2.0808598430803666,
        "pitch": 0.047104554890783135,
        "fov": 1.3497101748081497
      },
      "linkHotspots": [
        {
          "yaw": -0.35920555152630484,
          "pitch": 0.3058391138986458,
          "rotation": 5.497787143782138,
          "target": "11-corridoio-secondo-piano-informatica"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-laboratorio-informatica-musicale",
      "name": "Laboratorio Informatica Musicale",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -1.559557801295865,
        "pitch": 0.1218026096143312,
        "fov": 1.3497101748081497
      },
      "linkHotspots": [
        {
          "yaw": -2.9274631542597174,
          "pitch": 0.27051867804792096,
          "rotation": 5.497787143782138,
          "target": "10-corridoio-informatica"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-aula-biennio",
      "name": "Aula Biennio",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -2.759511827155478,
        "pitch": 0.013856669668957267,
        "fov": 1.3497101748081497
      },
      "linkHotspots": [
        {
          "yaw": -1.575445378509265,
          "pitch": 0.2491417833302041,
          "rotation": 0.7853981633974483,
          "target": "4-corridoio-multimediale"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-laboratorio-elettronica-n2",
      "name": "Laboratorio Elettronica n2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.3219897060486403,
        "pitch": 0.08761576837585139,
        "fov": 1.3497101748081497
      },
      "linkHotspots": [
        {
          "yaw": 2.4534946525057197,
          "pitch": 0.3733965939785193,
          "rotation": 4.71238898038469,
          "target": "22-computer-laboratorio"
        },
        {
          "yaw": 3.1063330454446154,
          "pitch": 0.1920094390117022,
          "rotation": 0.7853981633974483,
          "target": "6-corridoio-elettronica"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-computer-laboratorio",
      "name": "Computer Laboratorio",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -2.9945632058327973,
        "pitch": -0.017095759683087408,
        "fov": 1.3497101748081497
      },
      "linkHotspots": [
        {
          "yaw": 1.5662310797031047,
          "pitch": 0.5236820900911887,
          "rotation": 0.7853981633974483,
          "target": "21-laboratorio-elettronica-n2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-laboratorio-elettronica-n1",
      "name": "Laboratorio Elettronica n1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.08487909119595294,
        "pitch": 0.08334182845508309,
        "fov": 1.3497101748081497
      },
      "linkHotspots": [
        {
          "yaw": -2.784489620614636,
          "pitch": 0.24324994827088986,
          "rotation": 0,
          "target": "6-corridoio-elettronica"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-piazzale-elettronica",
      "name": "Piazzale Elettronica",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.4090829227744983,
        "pitch": 0.021369699603862813,
        "fov": 1.3497101748081497
      },
      "linkHotspots": [
        {
          "yaw": 0.42889556740294843,
          "pitch": 0.09630748785063759,
          "rotation": 4.71238898038469,
          "target": "25-cancello-di-ingresso"
        },
        {
          "yaw": 1.7625141502876387,
          "pitch": 0.12695518148932372,
          "rotation": 0,
          "target": "27-piazzale-di-ingresso"
        },
        {
          "yaw": -2.786727578830831,
          "pitch": 0.194646326311954,
          "rotation": 0,
          "target": "6-corridoio-elettronica"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-cancello-di-ingresso",
      "name": "Cancello di Ingresso",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -2.3640164309866307,
        "pitch": -0.30263796847348523,
        "fov": 1.3497101748081497
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "26-parcheggio",
      "name": "Parcheggio",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -2.9120373698463506,
        "pitch": -0.15380449586320566,
        "fov": 1.3497101748081497
      },
      "linkHotspots": [
        {
          "yaw": 1.2778295893320575,
          "pitch": 0.11653609930953479,
          "rotation": 5.497787143782138,
          "target": "25-cancello-di-ingresso"
        },
        {
          "yaw": 2.4840223396629426,
          "pitch": 0.028425677569092755,
          "rotation": 0.7853981633974483,
          "target": "27-piazzale-di-ingresso"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "27-piazzale-di-ingresso",
      "name": "Piazzale di Ingresso",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 2.7698716651293287,
        "pitch": 0.008547879841543704,
        "fov": 1.3497101748081497
      },
      "linkHotspots": [
        {
          "yaw": -0.942849007977518,
          "pitch": 0.12053039948548694,
          "rotation": 0,
          "target": "25-cancello-di-ingresso"
        },
        {
          "yaw": -1.4319979148350832,
          "pitch": 0.07569548275014171,
          "rotation": 5.497787143782138,
          "target": "24-piazzale-elettronica"
        },
        {
          "yaw": 2.9086251189347028,
          "pitch": 0.0713433496363649,
          "rotation": 13.351768777756625,
          "target": "29-atrio-esterno"
        },
        {
          "yaw": 1.9622739860774114,
          "pitch": 0.1285277444994115,
          "rotation": 0,
          "target": "28-campetti-esterni"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "28-campetti-esterni",
      "name": "Campetti Esterni",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -2.383023980695988,
        "pitch": -0.08870537789225352,
        "fov": 1.3497101748081497
      },
      "linkHotspots": [
        {
          "yaw": -0.7832125094176696,
          "pitch": 0.15282230045179546,
          "rotation": 0.7853981633974483,
          "target": "27-piazzale-di-ingresso"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.0059381506317333,
          "pitch": 0.020246287882574876,
          "title": "Campo da Calcetto<br>",
          "text": "Secondo campo da calcetto esterno<br>"
        },
        {
          "yaw": -2.5428565140586272,
          "pitch": 0.019161996809991422,
          "title": "Campo da calcetto<br>",
          "text": "Primo campo da calcetto esterno<br>"
        },
        {
          "yaw": -0.9716424530517358,
          "pitch": 0.040013030843427444,
          "title": "Bar Scolastico<br>",
          "text": "Bar per studenti e professori<br>"
        }
      ]
    },
    {
      "id": "29-atrio-esterno",
      "name": "Atrio Esterno",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1658,
      "initialViewParameters": {
        "yaw": -2.767393099354983,
        "pitch": 0.008547879841547257,
        "fov": 1.3497101748081497
      },
      "linkHotspots": [
        {
          "yaw": 2.200717789246232,
          "pitch": 0.1120417235134763,
          "rotation": 1.5707963267948966,
          "target": "27-piazzale-di-ingresso"
        },
        {
          "yaw": 1.6042261302568521,
          "pitch": 0.12355551907422324,
          "rotation": 4.71238898038469,
          "target": "27-piazzale-di-ingresso"
        },
        {
          "yaw": -2.9626668298381844,
          "pitch": 0.07051399560974403,
          "rotation": 0,
          "target": "0-atrio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "30-palestra",
      "name": "Palestra",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 1.3237860225080382,
        "pitch": -0.00933124260045659,
        "fov": 1.3497101748081497
      },
      "linkHotspots": [
        {
          "yaw": 2.192934915625113,
          "pitch": 0.2117717475872034,
          "rotation": 6.283185307179586,
          "target": "3-atrio-vicepresidenza"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
