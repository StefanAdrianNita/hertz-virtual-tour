var APP_DATA = {
  "scenes": [
    {
      "id": "1-cancello-di-ingresso",
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
        }
      ],
      "faceSize": 500,
      "initialViewParameters": {
        "yaw": -2.5149987302555523,
        "pitch": 0.03405524089488665,
        "fov": 1.3497101748081497
      },
      "linkHotspots": [
        {
          "yaw": -2.8052907243782528,
          "pitch": 0.12848519957824145,
          "rotation": 0,
          "target": "3-piazzale-esterno"
        },
        {
          "yaw": -2.128147931229682,
          "pitch": 0.21209742401108578,
          "rotation": 0,
          "target": "1-piazzale"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.1096047081558904,
          "pitch": 0.0877565822261932,
          "title": "Piazzale del Parcheggio<br>",
          "text": "Parcheggio Automobili<br>"
        }
      ]
    },
    {
      "id": "0-piazzale",
      "name": "Piazzale",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.442743960108433,
          "pitch": 0.14787965392458347,
          "rotation": 0.7853981633974483,
          "target": "3-piazzale-esterno"
        },
        {
          "yaw": 1.2467035821243933,
          "pitch": 0.20761702976203367,
          "rotation": 5.497787143782138,
          "target": "0-cancello-di-ingresso"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-ingresso-elettronica",
      "name": "Ingresso Elettronica",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.22411663135085114,
          "pitch": 0.22612825716122487,
          "rotation": 5.497787143782138,
          "target": "0-cancello-di-ingresso"
        },
        {
          "yaw": 0.5803043714493512,
          "pitch": 0.2645235946656612,
          "rotation": 0.7853981633974483,
          "target": "3-piazzale-esterno"
        },
        {
          "yaw": -2.7631084225220395,
          "pitch": 0.34393944728017267,
          "rotation": 6.283185307179586,
          "target": "16-corridoi-laboratori-di-elettronica"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-piazzale-esterno",
      "name": "Piazzale Esterno",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.8970927571293394,
          "pitch": 0.1937990958611877,
          "rotation": 0,
          "target": "0-cancello-di-ingresso"
        },
        {
          "yaw": 1.9447858618868805,
          "pitch": 0.15066569952130138,
          "rotation": 0,
          "target": "4-campetto-esterno"
        },
        {
          "yaw": -1.8735982256658232,
          "pitch": 0.24047934983951968,
          "rotation": 5.497787143782138,
          "target": "5-scale-entrata"
        },
        {
          "yaw": 2.674569161746568,
          "pitch": 0.22027290183224935,
          "rotation": 0.7853981633974483,
          "target": "5-scale-entrata"
        },
        {
          "yaw": -1.4429660160709403,
          "pitch": 0.13630020457647873,
          "rotation": 5.497787143782138,
          "target": "2-ingresso-elettronica"
        },
        {
          "yaw": 2.8185096900653512,
          "pitch": -0.05163987788515456,
          "rotation": 7.853981633974483,
          "target": "6-biblioteca"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-campetto-esterno",
      "name": "Campetto Esterno",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.7824292810795974,
          "pitch": 0.350786022976294,
          "rotation": 12.566370614359176,
          "target": "3-piazzale-esterno"
        },
        {
          "yaw": -1.5615357077357217,
          "pitch": 0.2815916951764308,
          "rotation": 0.7853981633974483,
          "target": "26-palestra"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.5493219452199725,
          "pitch": 0.08636386808293572,
          "title": "Campo Sportivo<br>",
          "text": "Campetto da Calcio esterno<br>"
        },
        {
          "yaw": -1.0364534212049747,
          "pitch": 0.034902228564867244,
          "title": "Bar <br>",
          "text": "Bar Scolastico<br>"
        }
      ]
    },
    {
      "id": "5-scale-entrata",
      "name": "Scale Entrata",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.9349592161567184,
          "pitch": 0.25352363917552445,
          "rotation": 0,
          "target": "7-atrio-principale"
        },
        {
          "yaw": 2.1577358330163356,
          "pitch": 0.41694847641985255,
          "rotation": 0.7853981633974483,
          "target": "3-piazzale-esterno"
        },
        {
          "yaw": 1.7019877977434126,
          "pitch": 0.4127102704600887,
          "rotation": 5.497787143782138,
          "target": "3-piazzale-esterno"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-biblioteca",
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
        }
      ],
      "faceSize": 500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0169450849519013,
          "pitch": -0.14531999780283655,
          "rotation": 0,
          "target": "7-atrio-principale"
        },
        {
          "yaw": -3.004475810404884,
          "pitch": 0.3636928171485252,
          "rotation": 0,
          "target": "3-piazzale-esterno"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-atrio-principale",
      "name": "Atrio Principale",
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
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.14571409649907174,
          "pitch": 0.42549110719030203,
          "rotation": 0,
          "target": "5-scale-entrata"
        },
        {
          "yaw": -0.7108777987114578,
          "pitch": 0.42740385120014857,
          "rotation": 0,
          "target": "6-biblioteca"
        },
        {
          "yaw": 1.307188226913441,
          "pitch": 0.35617979007752965,
          "rotation": 5.497787143782138,
          "target": "8-corridio-atrio"
        },
        {
          "yaw": 2.608858893290572,
          "pitch": 0.4751133724947394,
          "rotation": 0.7853981633974483,
          "target": "9-corridoio-vicepresidenza"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.9541169711407456,
          "pitch": 0.2643473869585513,
          "title": "Segreteria<br>",
          "text": "Segreteria"
        },
        {
          "yaw": -1.2995969487264905,
          "pitch": -0.05403411213341158,
          "title": "Bacheca Progetti<br>",
          "text": "Progetti realizzati dagli alunni<br>"
        },
        {
          "yaw": 2.0044177636858738,
          "pitch": 0.04254273013317089,
          "title": "Presidenza",
          "text": "Ufficio della Preside"
        }
      ]
    },
    {
      "id": "8-corridio-atrio",
      "name": "Corridio atrio",
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
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.9191663518063145,
          "pitch": 0.6285020994888963,
          "rotation": 0,
          "target": "7-atrio-principale"
        },
        {
          "yaw": 0.3526091876349309,
          "pitch": 0.3919172600977312,
          "rotation": 0,
          "target": "10-corridoio-aule-multimediali"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-corridoio-vicepresidenza",
      "name": "Corridoio vicepresidenza",
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
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.40941133260848694,
          "pitch": 0.3396074862932359,
          "rotation": 0,
          "target": "8-corridio-atrio"
        },
        {
          "yaw": -0.6566455290129021,
          "pitch": 0.5023227721877337,
          "rotation": 18.06415775814132,
          "target": "7-atrio-principale"
        },
        {
          "yaw": -0.3474233228481527,
          "pitch": 0.2782129872496313,
          "rotation": 0.7853981633974483,
          "target": "5-scale-entrata"
        },
        {
          "yaw": -2.581000993961915,
          "pitch": 0.17516646176157025,
          "rotation": 1.5707963267948966,
          "target": "26-palestra"
        },
        {
          "yaw": -2.138731379073711,
          "pitch": -0.47416847403548523,
          "rotation": 0,
          "target": "22-corridoio-secondo-piano-informatica"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.919354561558568,
          "pitch": 0.08015023465151572,
          "title": "Didattica",
          "text": "Ufficio della didattica<br>"
        },
        {
          "yaw": 1.863525343376664,
          "pitch": 0.16540042220358941,
          "title": "Vicepresidenza",
          "text": "Ufficio del Vicepreside<br>"
        }
      ]
    },
    {
      "id": "10-corridoio-aule-multimediali",
      "name": "Corridoio Aule Multimediali",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.8052036043795887,
          "pitch": 0.2901743284358105,
          "rotation": 0,
          "target": "8-corridio-atrio"
        },
        {
          "yaw": -1.2568242669333909,
          "pitch": 0.20376586331924962,
          "rotation": 0,
          "target": "11-laboratorio-multimediale"
        },
        {
          "yaw": 0.35855755290057445,
          "pitch": 0.31769898096071003,
          "rotation": 0,
          "target": "12-corridoio-informatica"
        },
        {
          "yaw": 0.594385789144166,
          "pitch": 0.17208904804851777,
          "rotation": 0.7853981633974483,
          "target": "14-aula-piano-terra"
        },
        {
          "yaw": -1.8062665420030388,
          "pitch": 1.0185961066018923,
          "rotation": 10.995574287564278,
          "target": "16-corridoi-laboratori-di-elettronica"
        },
        {
          "yaw": -1.6132876293532927,
          "pitch": 0.3563106004668555,
          "rotation": 5.497787143782138,
          "target": "20-corridoio-secondo-piano"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.141273483836894,
          "pitch": -0.030145951469279453,
          "title": "Laboratorio Multimediale<br>",
          "text": "Laboratorio di inglese<br>"
        },
        {
          "yaw": 0.6155473227846109,
          "pitch": 0.017825894533306297,
          "title": "Aula primo piano<br>",
          "text": "Una delle nostre aule<br>"
        },
        {
          "yaw": -1.7738372698326685,
          "pitch": 0.8066524515988966,
          "title": "Scale Laboratori Elettronica<br>",
          "text": "Queste scale collegano il primo piano con i laboratori di elettronica situati al piano terra<br>"
        }
      ]
    },
    {
      "id": "11-laboratorio-multimediale",
      "name": "Laboratorio Multimediale",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.702406107610484,
          "pitch": 0.4664434487260891,
          "rotation": 0,
          "target": "10-corridoio-aule-multimediali"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-corridoio-informatica",
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
        }
      ],
      "faceSize": 500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.2904700640355369,
          "pitch": 0.5980156047359024,
          "rotation": 0,
          "target": "13-laboratorio-di-informatica"
        },
        {
          "yaw": -2.7869645171821595,
          "pitch": 0.3108628252974892,
          "rotation": 0,
          "target": "10-corridoio-aule-multimediali"
        },
        {
          "yaw": 0.6250869805862962,
          "pitch": 0.17845718079428963,
          "rotation": 0.7853981633974483,
          "target": "15-laboratorio-informatica-musicale"
        },
        {
          "yaw": -1.6927479272764128,
          "pitch": 0.2746740454193226,
          "rotation": 5.497787143782138,
          "target": "27-corridoio-laboratori-secondo-piano"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.03947921290562917,
          "pitch": 0.08385313779671932,
          "title": "Bagni",
          "text": "Bagno per gli studenti<br>"
        },
        {
          "yaw": -1.4341324106124755,
          "pitch": 0.038823489227365116,
          "title": "Laboratorio di Informatica<br>",
          "text": "Laboratorio di Informatica<br>"
        },
        {
          "yaw": 0.7154071264011748,
          "pitch": -0.014856361298985377,
          "title": "Informatica Musicale<br>",
          "text": "Laboratorio di Informatica Musicale<br>"
        }
      ]
    },
    {
      "id": "13-laboratorio-di-informatica",
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
        }
      ],
      "faceSize": 500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.0733930693144949,
          "pitch": 0.6461897701003565,
          "rotation": 0.7853981633974483,
          "target": "12-corridoio-informatica"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-aula-piano-terra",
      "name": "Aula piano terra",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6109209472029846,
          "pitch": 0.5198107042315812,
          "rotation": 0.7853981633974483,
          "target": "10-corridoio-aule-multimediali"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-laboratorio-informatica-musicale",
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
        }
      ],
      "faceSize": 500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.94679694220412,
          "pitch": 0.7852190448239007,
          "rotation": 0,
          "target": "12-corridoio-informatica"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-corridoi-laboratori-di-elettronica",
      "name": "Corridoi Laboratori di Elettronica",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.8428737400916315,
          "pitch": 0.2724198162442626,
          "rotation": 0.7853981633974483,
          "target": "10-corridoio-aule-multimediali"
        },
        {
          "yaw": -3.0011192343722577,
          "pitch": 0.7405569557966984,
          "rotation": 5.497787143782138,
          "target": "17-primo-laboratorio-elettronica"
        },
        {
          "yaw": -2.8286358355654375,
          "pitch": 0.26081653830605234,
          "rotation": 0,
          "target": "18-secondo-laboratorio-elettronica"
        },
        {
          "yaw": -2.5306455122547877,
          "pitch": 0.22950844698899786,
          "rotation": 0.7853981633974483,
          "target": "2-ingresso-elettronica"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.8442338363218447,
          "pitch": 0.03749177705798523,
          "title": "Scale Primo Piano<br>",
          "text": "Queste scale collegano i laboratori di Elettronica del piano terra con i corridoi del primo piano<br>"
        },
        {
          "yaw": 1.6130414396514903,
          "pitch": 0.15422002705048143,
          "title": "Laboratorio di Disegno<br>",
          "text": "Laboratorio per il disegno tecnico<br>"
        },
        {
          "yaw": -3.1248962026307368,
          "pitch": -0.009224439388933803,
          "title": "Laboratorio di Elettronica 1<br>",
          "text": "Primo laboratorio di Elettronica<br>"
        },
        {
          "yaw": -2.8436594408172873,
          "pitch": -0.07663830748869849,
          "title": "Laboratorio di Elettronica 2<br>",
          "text": "Secondo laboratorio di Elettronica<br>"
        }
      ]
    },
    {
      "id": "17-primo-laboratorio-elettronica",
      "name": "Primo Laboratorio Elettronica",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.776110927995486,
          "pitch": 0.49477817419846737,
          "rotation": 0,
          "target": "16-corridoi-laboratori-di-elettronica"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-secondo-laboratorio-elettronica",
      "name": "Secondo Laboratorio Elettronica",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.06977846067106,
          "pitch": 0.4403021085360095,
          "rotation": 0,
          "target": "16-corridoi-laboratori-di-elettronica"
        },
        {
          "yaw": 2.3955312372594104,
          "pitch": 0.6814722246006362,
          "rotation": 4.71238898038469,
          "target": "19-computer-laboratorio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-computer-laboratorio",
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
        }
      ],
      "faceSize": 500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5482187548344504,
          "pitch": 1.0938607540552567,
          "rotation": 0.7853981633974483,
          "target": "18-secondo-laboratorio-elettronica"
        },
        {
          "yaw": 1.0235602097565923,
          "pitch": 0.8705074508612558,
          "rotation": 5.497787143782138,
          "target": "16-corridoi-laboratori-di-elettronica"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-corridoio-secondo-piano",
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
        }
      ],
      "faceSize": 500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.8690494846546226,
          "pitch": 0.8864386098532471,
          "rotation": 5.497787143782138,
          "target": "10-corridoio-aule-multimediali"
        },
        {
          "yaw": -1.485381418765428,
          "pitch": 0.2217071943152078,
          "rotation": 5.497787143782138,
          "target": "21-aula-conferenze"
        },
        {
          "yaw": -2.7716588633962047,
          "pitch": 0.35121851861326725,
          "rotation": 0,
          "target": "22-corridoio-secondo-piano-informatica"
        },
        {
          "yaw": 0.3670325633247682,
          "pitch": 0.20909716859546457,
          "rotation": 0,
          "target": "27-corridoio-laboratori-secondo-piano"
        },
        {
          "yaw": 0.5611426659164156,
          "pitch": 0.20255874443271793,
          "rotation": 0.7853981633974483,
          "target": "30-aula-secondo-piano"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.4832774498943628,
          "pitch": 0.019408959278262472,
          "title": "Aula Conferenze<br>",
          "text": "Aula adibita ai vari incontri formativi<br>"
        },
        {
          "yaw": 0.5901696998064683,
          "pitch": 0.02654903437471745,
          "title": "Aula secondo piano<br>",
          "text": "Un esempio delle nostre aule<br>"
        }
      ]
    },
    {
      "id": "21-aula-conferenze",
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
        }
      ],
      "faceSize": 500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.7524684297725432,
          "pitch": 0.2557296496080941,
          "rotation": 5.497787143782138,
          "target": "20-corridoio-secondo-piano"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-corridoio-secondo-piano-informatica",
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
        }
      ],
      "faceSize": 500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.9681122503645057,
          "pitch": 0.5425186054481212,
          "rotation": 0.7853981633974483,
          "target": "24-laboratorio-net"
        },
        {
          "yaw": -1.2570155455866363,
          "pitch": 0.513962769803264,
          "rotation": 10.995574287564278,
          "target": "23-laboratorio-sistemi-e-reti"
        },
        {
          "yaw": -1.2017156405753937,
          "pitch": 0.2647593620901585,
          "rotation": 0,
          "target": "25-laboratorio-pcto"
        },
        {
          "yaw": -2.7288754116330303,
          "pitch": 0.2285486161205057,
          "rotation": 0.7853981633974483,
          "target": "9-corridoio-vicepresidenza"
        },
        {
          "yaw": 0.4012639118617489,
          "pitch": 0.4215892486826327,
          "rotation": 0,
          "target": "20-corridoio-secondo-piano"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.1968394063706427,
          "pitch": 0.023188509177030525,
          "title": "Laboratorio PCTO<br>",
          "text": "Laboratorio progetti tecnologici adibito con Stampanti 3D<br>"
        }
      ]
    },
    {
      "id": "23-laboratorio-sistemi-e-reti",
      "name": "Laboratorio Sistemi e Reti",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.328821191303728,
          "pitch": 0.41210762987776484,
          "rotation": 5.497787143782138,
          "target": "22-corridoio-secondo-piano-informatica"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-laboratorio-net",
      "name": "Laboratorio NET",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.7512128426656588,
          "pitch": 0.29337843640859695,
          "rotation": 0.7853981633974483,
          "target": "22-corridoio-secondo-piano-informatica"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-laboratorio-pcto",
      "name": "Laboratorio PCTO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.2366166579820579,
          "pitch": 0.4188952858740862,
          "rotation": 0.7853981633974483,
          "target": "22-corridoio-secondo-piano-informatica"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "26-palestra",
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
        }
      ],
      "faceSize": 500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.4226455156202604,
          "pitch": 0.34243252971335814,
          "rotation": 6.283185307179586,
          "target": "4-campetto-esterno"
        },
        {
          "yaw": 2.154145609561332,
          "pitch": 0.46374921967481875,
          "rotation": 6.283185307179586,
          "target": "9-corridoio-vicepresidenza"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "27-corridoio-laboratori-secondo-piano",
      "name": "Corridoio Laboratori Secondo Piano",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.8143268292550268,
          "pitch": 0.40809027151248145,
          "rotation": 0,
          "target": "20-corridoio-secondo-piano"
        },
        {
          "yaw": -1.0530391278214193,
          "pitch": 0.334175324658478,
          "rotation": 0.7853981633974483,
          "target": "29-laboratorio-fisica"
        },
        {
          "yaw": -1.374532455692263,
          "pitch": 0.34640427888138703,
          "rotation": 5.497787143782138,
          "target": "28-laboratorio-chimica"
        },
        {
          "yaw": -1.8759918585439,
          "pitch": 0.6175775830600827,
          "rotation": 10.995574287564278,
          "target": "12-corridoio-informatica"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.4852880980162553,
          "pitch": 0.014236594064474417,
          "title": "Laboratorio di Chimica<br>",
          "text": "Laboratorio Chimica per il Biennio<br>"
        },
        {
          "yaw": -0.9663601540994851,
          "pitch": 0.005545212568954128,
          "title": "Laboratorio di Fisica<br>",
          "text": "Laboratorio Fisica per il Biennio<br>"
        }
      ]
    },
    {
      "id": "28-laboratorio-chimica",
      "name": "Laboratorio Chimica",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.0078668757290483,
          "pitch": 0.3714412941315537,
          "rotation": 0,
          "target": "27-corridoio-laboratori-secondo-piano"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "29-laboratorio-fisica",
      "name": "Laboratorio Fisica",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.9704918894565306,
          "pitch": 0.42818424262203436,
          "rotation": 0,
          "target": "27-corridoio-laboratori-secondo-piano"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "30-aula-secondo-piano",
      "name": "Aula Secondo Piano",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.785371472735262,
          "pitch": 0.529080111283001,
          "rotation": 5.497787143782138,
          "target": "20-corridoio-secondo-piano"
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
