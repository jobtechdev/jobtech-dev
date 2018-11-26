import {Injectable} from '@angular/core';
import {Itemm, Whitepapers} from '../model/item';
import {Item} from '../model/item';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';


@Injectable()

export class ContentService {

  constructor() {
  }


  getApidatasetsByName(name): Observable<any> {

    return Observable.of(APIDATASETS.find(current => current.name === name));
    // for (var i = 0; i < ASSETS.length; i++) {
    //   if (ASSETS[i][name] === value) {
    //     return ASSETS[i];
    //   }
    // }
    // return null;
  }
  getWhitepaperByName(name): Observable<any> {

    return Observable.of(WHITEPAPERS.find(current => current.name === name));
    // for (var i = 0; i < ASSETS.length; i++) {
    //   if (ASSETS[i][name] === value) {
    //     return ASSETS[i];
    //   }
    // }
    // return null;
  }


  getShowcases(): Observable<Item[]> {
    return Observable.of(SHOWCASES);
  }

  getApidatasets(): Observable<Itemm[]> {
    return Observable.of(APIDATASETS);
  }
  getWhitepapers(): Observable<Whitepapers[]> {
    return Observable.of(WHITEPAPERS);
  }

}

export const SHOWCASES = [

  {
    'title': 'Jobtech Store',
    'details': "Jobtech Store intends to gather and present thousands of digital labour market services, all in one place. The target audience is wide. All people from students to seniors who want to take on work and assignments",
    'link': './showcase/jobtechstore',
    'image': 'assets/images/jobstore.jpg',
    'type': 'GIG API'
  },

  {
    'title': 'My Portable Career',
    'details': "A 'career data management system' allowing 1) people to get control over their own career info, and 2) service providers to plug-in their services  to reach their target audience.",
    'link': './showcase/portable-career',
    'image': 'assets/images/Background_blue_gradient_min.png',
    'type': 'GIG API'
  },
  {
    'title': 'GIG API',
    'details': 'The goal is, together with private GIG-platforms, find a good layout where services are matched to those who are looking for assignments and those who need to be assigned tasks.',
    'link': 'https://github.com/JobtechSwe/gig-api',
    'image': 'assets/images/tim-gouw-69753-min.jpg',
    'type': 'GIG API'
  },

  {
    'title': 'Widget Jobbskills',
    'details': 'Widget that matches ads with jobseekers via Jobskills. Developed by Iteam',
    'link': 'https://github.com/Jobskills/jobskills-widget',
    'image': 'assets/images/Iteam.jpg',
    'type': 'Widget Jobskills'
  },

  {
    'title': 'Jobb för dig',
    'details': 'Widget that shows personalized job suggestions based on open data within Jobtech.',
    'link': 'https://github.com/JobtechSwe/jobwidget',
    'image': 'assets/images/jobbwidget.jpg',
    'type': 'Jobb för dig'
  },
  {
    'title': 'A job',
    'details': 'An impartial marketplace for labor actors.',
    'link': 'https://jobby.info',
    'image': 'assets/images/job.png',
    'type': 'Jobby'
  },


  {
    'title': 'Data Universe',
    'details': 'Data Universe makes your data accessible and understandable by enabling dynamic exploration and visualization in a Virtual Reality space.',
    'link': 'https://data-universe.github.io/',
    'image': 'assets/images/data-universe-puff.png',
    'type': 'DATA-UNIVERSE'
  },
  {
    'title': 'Historical Data Analysis',
    'details': 'Make smarter decisions with past data on job trends in various industry sectors',
    'link': 'http://historik.azurewebsites.net',
    'image': 'assets/images/history-analysis-puff.jpg',
    'type': 'APPLICATION'
  },
  {
    'title': 'Vacancies Widget',
    'details': 'Add Job postings list to your site in minutes. \n \nFor example get all job postings in a municipaliti.',
    'link': 'https://github.com/jobtechdev/vacancieswidget',
    'image': 'assets/images/widget.png',
    'type': 'VACANCIES WIDGET'
  },
  {
    'title': 'Post job ads',
    'details': 'A SDK written in Ruby to validate and send job ads, developed by justarrived.se',
    'link': 'https://github.com/buren/arbetsformedlingen',
    'image': 'assets/images/justarrived.png',
    'type': 'POST JOB ADS'
  },
  {
    'title': 'Ontologiutforskaren',
    'details': 'An example of how to use our Ontology API ',
    'link': 'http://pilot.arbetsformedlingen.se/kompetensutforskaren/#!/',
    'image': 'assets/images/ontologiutforskaren.jpg',
    'type': 'ONTOLOGIUTFORSKAREN'
  },
];

export const APIDATASETS = [
  {
    'name': 'JobTech MyData',
    'title': 'JobTech MyData',
    'shortDescription': 'Is it possible to create a distributed and decentralized data storage, containing information of the CV data of the individual. Making it accessible for those for those who have an interest in reading or writing in the data but on the basis that the individual always has control of the information? ',
    'texts': [
      {
        'header': 'Background',
        'description': 'MyData is a movement aiming for individuals to have control over their own data. Jobtech MyData explores a concept to achieve that primary for the labor market.\n' +
          'The goal is to see the potential opportunities for the Swedish labor market. \n' +
          'Therefor we have started an experimental innovation team. They will to try the hypothesis that it is possible to create a distributed and decentralized data storage, containing information of the CV data of the individual. Making it accessible for those for those who have an interest in reading or writing in the data but on the basis that the individual always has control of the information.\n',
      },
      {
        'header': 'Purpose and goal',
        'description': 'Protect the individual\'s right to his data (MyData movement)\n Massive data sets collected by companies and authorities creates possibility to see patterns in the behavior of people, and create new products and services to create a new value. The data can also be used for other purposes for example monitoring or affect opinions in politics. To control a lot of individual data could mean a high power concentration and therefor a huge risk. To “vaccinate” for this kind of impact we want to reach a solution were the individual’s right to their own data is the starting point, and concrete moves the power back to the individuals to act easily against the power concentration and information monopoly.',
      },
      {
        'header': 'Community building and innovation power',
        'description': 'Our second goal is to enable innovation force to authorities. To be able to in a better way collaborate and develop as powerful digital services as private startups. The private and the public sector should be able to collaborate in both development and with common infrastructure/ standards for increasing the public benefit. By enabling a “digital bureaucracy”, i.e. traceability and standardized communication, new more transparent and effective forms of governance can be established. This is about competitiveness for Sweden and EU, but basically it is primary about increased social benefits for the entire humanity.\n' +
          'The world of today is global and flows from all corners of the world. Opens source is a global movement and has the power to improve, both for small and large countries and organizations.\n',
      },
      {
        'header': 'Promote the labor market',
        'description': 'Simplify and increase the efficiency of career work by catalyzing the ecosystem around Jobtech. \n' +
          'New and better services for jobseekers and employers. Free and efficient cross-border mobility, reducing the cost of employers and an easier user experience. \n',
      },
      {
        'header': 'Method',
        'description': 'An innovation team, consisting competence in programming, UX, infrastructure, encryption/security and expertise form the agency. The innovation team works iteratively and will achieve higher and higher goals / milestones. For example the first step is to get all system components in place with very limited functionality. Later on the complexity is increased and finally there is an embryo to a product that can be evaluated.',
      },
      {
        'header': 'Transparence and collaboration',
        'description': 'Our goal is to be 100% transparence and we will put all code and documentation on Github. The meaning is to consolidate knowledge and increase collaboration with other initiatives working on the same thought. We would be very happy to get in contact with you and we will support you with our knowledge but also learn from yours.',
      },
      {
        'header': 'The code',
        'description': 'By visualizing and practically show how ownership of your own data could work, it will become   easier for others to take stand on the concept.\n' +
          'We strive to reuse as much as possible for not inventing the wheel again. The project in influenced by <a href="http://mydata.org" target="_blank">mydata.org</a>\n' +
          '\n' +
          'The project is divided into four subsystem:\n',
      },
      {
        'header': '',
        'description': '<p>Projektet är indelat i 4 delsystem:</p>\n' +
          '<ul>\n' +
          '<li><a href="https://github.com/JobtechSwe/mydata-app">mydata-app</a>: An app were the individuals handles their data.</li>\n' +
          '<li><a href="https://github.com/JobtechSwe/mydata-operator">mydata-operator</a>: A technical operator who granted an approval from the individual, manages the communication between the individual, the data snd an external service.</li>\n' +

          '<li><a href="https://github.com/JobtechSwe/mydata-cv">mydata-cv</a>: a sample servce that reads /writes to the individual’s data after being allowed to. (Data Source and Data Sink)</li>\n' +

          '<li><a href="https://github.com/JobtechSwe/mydata-pds">mydata-pds</a>: secure data storage, only available for the individual. PDS stands for Personal Data Storage.</li>\n' +
          '</ul>',
      },      {
        'header': '',
        'description': '',
      },


    ],

    'image': 'assets/images/api-puff_x239.jpg',


    'headimage': 'assets/images/api-puff_x239.jpg',
    'externallinks': [


    ],
    'files': []
  },
  {
    'name': 'Taxonomi Service',
    'title': 'Taxonomi Service',
    'shortDescription': 'The Taxonomi Service of Arbetsförmedlingen. This webservice contains data commonly used by Arbetsförmedlingen',
    'texts': [
      {
        'header': 'Description',
        'description': 'Taxonomi Service contains data commonly used by Arbetsförmedlingen.\n For example you can find all occupation names, all Unemployment Benefit Societies (a-kassor), local groups (SSYK), and much more.\n You need to use the language code 502 (Swedish) to get the results of the requests.\n\nCheck it out for your self!',
      },

    ],

    'image': 'assets/images/tax1.jpg',


    'headimage': 'assets/images/tax.jpg',
    'externallinks': [
      {
        'name': 'Go to Webservice',

        'link': 'http://api.arbetsformedlingen.se/taxonomi/v0/TaxonomiService.asmx?',

      },

    ],
    'files': []
  },
  {
    'name': 'RAF',
    'title': 'RAF',
    'shortDescription': 'Laboratory Reference Material (RAF) contains groupings of the professions that are expected to make similar demands on ability from a medical perspective.',
    'texts': [
      {
        'header': 'Description',
        'description': 'Laboratory Reference Material (RAF) contains groupings of the professions that are expected to make similar demands on ability from a medical perspective.\nThese requirements are called activity requirements and are described on the basis of common tasks within the group. \n\nRAF is a documentation that can be used as support and guidance in assessing workforce in health insurance. RAF can also be used in other contexts, for example in connection with Försäkringskassans communication with insured, employers and the Employment Service.',
      },

    ],

    'image': 'assets/images/RAF.jpg',


    'headimage': 'assets/images/rafheader.jpg',
    'externallinks': [
      {
        'name': 'Go to API',

        'link': 'raml_vagledning/index.html',

      },
      {
        'name': 'Read more',
        'link': 'https://www.arbetsformedlingen.se/download/18.703c5796164f21e1ee55a3c7/1533629515016/referensmaterial-arbetsformaga-raf-externt-api.pdf',
      }
    ],
    'files': []
  },
  {
    'name': 'job-market-ontology',
    'title': 'Job Market Ontology',
    'shortDescription': 'Ontology created from job postings.(This is a prototype service, with full functionality)',
    'texts': [
      {
        'header': 'Description',
        'description': 'The job market is dynamical. It is an ongoing demand on new jobs and new competences.\nFor effective matching between employers and jobseekers a common language that the machines support is needed. \n\nJob market ontology is a project which uses modern technology to describe the job market for making more effective matching and better user experiences.\n\nThe ontology is created by automatically analysing 6.3 millions ads and extracting mentioned competencese. With intelligent algorithms the ontology knows how the competences is related to each other.',
      },
      {
        'header': 'What does your competences relates to?',
        'description': 'The first version of the Job market ontology consists of a limited set of competences. Here you can explore them and see how they relates to each other. \n\nThe state of the ontology is beta and it is changing to continuously get improved everyday.'
      }
    ],

    'image': 'assets/images/jobb-rymden_x238.png',


    'headimage': 'assets/images/asset-header-ontologi.png',
    'externallinks': [
      {
        'name': 'Go to API',

        'link': 'http://ontologi.arbetsformedlingen.se/ontology/v1/?url=swagger.json',

      },
      {
        'name': 'Read more',
        'link': 'http://ontologi.arbetsformedlingen.se/ontologi/#!/',
      }
    ],
    'files': []
  },
  {
    'name': 'occupation-forecasts',
    'title': 'Occupation Forecasts',
    'shortDescription': 'Short and long-term forecasts of labour demand for different occupations',
    'texts': [
      {
        'header': 'Description',

        'description': 'API Occupation Forecasts (API Vägledning) contains 1 and 5 years forecasts for different occupations. The Forecasts are made and published in February 2018 \n\nThe forecasts are based on the standard SSYK (Swedish standard occupation classification)\n\n Readmore about <a href="http://www.scb.se/dokumentation/klassifikationer-och-standarder/standard-for-svensk-yrkesklassificering-ssyk/" target="_blank">SSYK</a> \n\nWith API Occupation Forecasts (API Vägledning) it is possible to integrate Arbetsförmedlingen (the Employment Agency) forecasts into in custom built applications. \n \nThe API is an open interface without contract or registration requirements.\n\n',
      },
      {
        'header': '',
        'description': ''
      }
    ],
    'image': 'assets/images/dev-services-puff.jpg',
    'headimage': 'assets/images/services-head.jpg',
    'externallinks': [
      {
        'name': 'Go to API',
        'link': 'http://api.arbetsformedlingen.se/af/v2/forecasts/api/#!/forecasts/'
      }
    ],
    'files': [
      {
        'name': '',
        'url': ''
      },
      {
        'name': '',
        'url': ''
      }

    ]
  },
  {
    'name': 'platsbanken',
    'title': 'Platsbanken',
    'shortDescription': 'All the current job postings available on Platsbanken',
    'texts': [
      {
        'header': 'Description',

        'description': 'API Platsbanken contains all current job ads. About 3000 new ads are submitted daily by employers, \n5 million accesses to the job posting database daily. \n \nWith the API it is possible to interact with Arbetsförmedlingens job ad database with in custom built applications. \n\nThe API is an open interface without contract or registration requirements. Some of the data returned from the service is of the type of fuzzy matching. \nThis means that the results from a list search results in hits closely related keywords. Soft matching takes place in the professions and municipalities.\n \nExample of fuzzy matching: \nIf you are looking for a "bagare" (baker), you also get hits for "Konditor" (confectioner) because these two occupations are closely related.\n \nSee the technical description for more methods and requests.\n\n\nLearn more about the Platsbanken API or start use the APi right away',

      }
    ],
    'image': 'assets/images/api-puff_x239.jpg',
    'externallinks': [
      {
        'name': 'Go to API',
        'link': './swagger/index.html',
      },


    ],
    'files': [
      {
        'name': 'Technical description (Swe)',
        'url': 'https://www.arbetsformedlingen.se/download/18.40fa4e7b159ff029331706ca/1486976282357/teknisk-beskrivning-lediga-jobb.pdf'
      },
      {
        'name': 'License (Swe)',
        'url': 'https://www.arbetsformedlingen.se/download/18.362b127c14924e08e871375/1415263305183/villkor_ledigajobb.pdf'
      }
    ]
  },
  {
    'name': 'occupational_description',
    'title': 'Occupational Descriptions',
    'shortDescription': 'Contains descriptions of 350 different occupations',
    'texts': [
      {
        'header': 'Description',
        'description': 'Occupational description is a webservice, it contain descriptions of nearly 350 different occupations.\n\nThe webservice is supposed to be used by anyone who wants to download texts and descriptions of one or more professions from the Profession A-Ö application.\n\nDuring 2018 there will be a redirect to a new database with better structure.The old webservice & the new API will live in parallel for about 1 year. Go to the New API for more information.',
      },
      {
        'header': '',
        'description': ''
      }
    ],
    'image': 'assets/images/occupation-puff.jpg',
    'headimage': 'assets/images/occupation-head.jpg',
    'externallinks': [
      {
        'name': 'Go to Webservice',
        'link': 'http://api.arbetsformedlingen.se/af/v0/Occupation/wsoccupation.asmx',
      },

      {
        'name': 'Go to New API',
        'link': 'raml_vagledning/index.html',
      },

    ],
    'files': [
      {
        'name': '',
        'url': '',
      },

      {
        'name': 'License (sv)',
        'url': 'https://www.arbetsformedlingen.se/download/18.1974235114fa922d37751b2/1441803774120/Licens+f%C3%B6r+anv%C3%A4ndning+av+Arbetsf%C3%B6rmedlingens+%C3%B6ppna+data.pdf',
      },
    ]

  },
  {
    'name': 'historical-job-postings',
    'title': 'Historical Job Postings',
    'shortDescription': 'All job postings from Platsbanken 2006-2017',
    'texts': [
      {
        'header': 'Description',

        'description': 'This dataset consists of 4.2M job postings (7.7M job positions) published on Platsbanken from the year 2006 up to and including 2017. Texts have been anonymized with sentences including names, telephone numbers and email addresses removed.\nEach listing contains metadata on location, dates, employer name, job type and any additional job details.\nFor a visual overview of this dataset, please see the <a href="http://historik.azurewebsites.net/" target="_blank">dashboard example</a>. ',
      },
      {
        'header': 'API with basic statistics',
        'description': 'We provide a microservice for basic statistics and queries on the dataset.\n\nExamples\nA notebook with examples can be found <a href="https://github.com/simonbe/afhistorik/blob/master/notebooks/API_description.ipynb" target="_blank">here</a>\n\nData format \nEach line in a file contains a job listing in a JSON format '
      }
    ],
    'image': 'assets/images/data-analysis-puff_x239.jpg',
    'externallinks': [
      {
        'name': 'Go to API',
        'link': 'https://github.com/simonbe/afhistorik',
      },
    ],
    'files': [
      {
        'name': '2006-2017',

        'url': 'https://simonbe.blob.core.windows.net/afhistorik/pb2006_2017.zip',
      },
      {
        'name': '2006',
        'url': 'https://simonbe.blob.core.windows.net/afhistorik/2006.zip'
      },
      {
        'name': '2007',
        'url': 'https://simonbe.blob.core.windows.net/afhistorik/2007.zip'
      },
      {
        'name': '2008',
        'url': 'https://simonbe.blob.core.windows.net/afhistorik/2008.zip'
      },
      {
        'name': '2009',
        'url': 'https://simonbe.blob.core.windows.net/afhistorik/2009.zip'
      },
      {
        'name': '2010',
        'url': 'https://simonbe.blob.core.windows.net/afhistorik/2010.zip'
      },
      {
        'name': '2011',
        'url': 'https://simonbe.blob.core.windows.net/afhistorik/2011.zip'
      },
      {
        'name': '2012',
        'url': 'https://simonbe.blob.core.windows.net/afhistorik/2012.zip'
      },
      {
        'name': '2013',
        'url': 'https://simonbe.blob.core.windows.net/afhistorik/2013.zip'
      },
      {
        'name': '2014',
        'url': 'https://simonbe.blob.core.windows.net/afhistorik/2014.zip'
      },
      {
        'name': '2015',
        'url': 'https://simonbe.blob.core.windows.net/afhistorik/2015.zip'
      },
      {
        'name': '2016',
        'url': 'https://simonbe.blob.core.windows.net/afhistorik/2016.zip'
      },
      {
        'name': '2017',
        'url': 'https://simonbe.blob.core.windows.net/afhistorik/2017.zip'
      },

    ]
  }
];

export const WHITEPAPERS = [
  {
    'name': 'SSYKochESCO',
    'title': 'Yrken och kompetensord i Sverige och inom EU',
    'description': 'SSYK (Standard för svensk yrkesklas­sificering) \n' +
      'Synliggör vilka yrken som finns på arbetsmark­naden och fungera som en struktur för internationell rapportering.\n\n' +
      'ESCO (EU-gemensam klassificer­ing av kompetenser, kvalifikationer och yrken.)\n' +
      'Innehåller för arbetsmarknaden och utbildningsvärlden, relevanta kompetenser, kvalifikationer och yrken inom EU. ',
    'link': '../assets/files/SSYK och Esco.pdf'
  },
  {
    'name': 'Värdeförrådskomponentergenomåren',
    'title': 'Värdeförrådskomponenter genom åren',
    'description': 'Arbets­förmedlingens system har genom åren har utvecklats vidare för att fungera bättre vid matchning av lediga jobb och arbetssökande.\n' +
      'En ny uppdateringsrutin gällande vär­deförrådskomponenter planeras vara på plats sent 2018 eller tidigt 2019.',
    'link': '../assets/files/vardeforradskomponentergenomaren.pdf'
  },
  {
    'name': 'Uppdatering av värdeförrådskomponenter',
    'title': 'Uppdatering av värdeförrådskomponenter',
    'description': 'Värdeförrådskomponenterna ligger till grund för flera centrala funktioner på Arbetsförmedlingen. Värdeförrådskomponenterna uppdateras i samråd med Statistiska centralby­rån SCB och Swedish Standards Insti­tute SIS. ',
    'link': '../assets/files/uppdateringavvardeforradskomponenter.pdf'
  },
  {
    'name': 'Värdeförrådskomponenter',
    'title': 'Värdeförrådskomponenter',
    'description': 'Kopplingen mellan standarder, strukturer och värdeförråd samt uppdateringsfrekvensen av de olika värdeförrådskomponenterna som Arbetsförmedlingen använder visas i en övergripande bild.',
    'link': '../assets/files/Vardeforradskomponenter.pdf'
  },
  {
    'name': 'Digital frontrunners',
    'title': 'Digital frontrunners',
    'description': 'Explains how the Digital Frontrunners programme equips participants with new competencies for designing effective policy in the digital age.\n' +
      'Highlights innovative methods that governments are using to solve four key challenges for the creation of skills policy to foster workforces that are fit for the future.\n' +
      'Presents a ‘policy blueprint’ that policymakers and other stakeholders can follow to make more inclusive and responsive skills policy.\n',
    'link': '../assets/files/Digital_Frontrunners_Web.pdf'
  },
];

