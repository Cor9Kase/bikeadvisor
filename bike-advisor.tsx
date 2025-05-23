import React, { useState } from 'react';

const BikeCatalog = {
  byPurpose: {
    pendling: [
      {
        name: "Riese & Müller Charger4 GT",
        description: "Et ypperlig pendlervalg med integrert 750 Wh batteri som gir lang rekkevidde og kraftig Bosch-motor for høy marsjfart. Dempegaffel og dempet setepinne sørger for komfort selv på ujevn asfalt.",
        features: ["750 Wh batteri", "Kraftig Bosch-motor", "Dempegaffel", "Dempet setepinne", "Kontinuerlig kjørelys"],
        price: "5,699.00 €",
        image: "/api/placeholder/300/180"
      },
      {
        name: "Tern Quick Haul D8",
        description: "En kompakt elsykkel som kombinerer bysykkelens smidighet med noe lastkapasitet. Lett å manøvrere i bytrafikk og tar liten plass på kontoret eller i boden.",
        features: ["400 Wh batteri", "Bosch-motor", "Kompakt", "Ergonomisk sittestilling", "Robust ramme"],
        price: "3,499.00 €",
        image: "/api/placeholder/300/180"
      },
      {
        name: "Riese & Müller Roadster",
        description: "En sporty pendlesykkel med slank, tradisjonell ramme. Den er rask og lettkjørt, med en sterk Bosch Performance-motor som gir rask akselerasjon.",
        features: ["Bosch Performance-motor", "Slank ramme", "Fremoverlent kjørestilling", "Smalere dekk", "Dempegaffel"],
        price: "4,499.00 €",
        image: "/api/placeholder/300/180"
      }
    ],
    bybruk: [
      {
        name: "Riese & Müller Swing",
        description: "En klassisk komfort-elsykkel i retrostil, rettet mot bysykling i rolig tempo. Elegant buet lav-innstegsramme, dempegaffel og dempet setepinne.",
        features: ["Lav-innstegsramme", "Dempegaffel", "Dempet setepinne", "Navgir og beltedrift", "Oppreist, avslappet sittestilling"],
        price: "4,299.00 €",
        image: "/api/placeholder/300/180"
      },
      {
        name: "Tern NBD",
        description: "Terns 'Near Busy Dad' (NBD) er en superlav innstegs elsykkel utformet for enkelhet og komfort i byen. Med ultralav ramme er det enkelt å sette føttene flatt i bakken.",
        features: ["Ultralav ramme (39 cm steg)", "Bosch Active Plus-motor", "Tykkere dekk", "Dempepinne i setet", "Brukervennlig"],
        price: "3,999.00 €",
        image: "/api/placeholder/300/180"
      },
      {
        name: "Riese & Müller Nevo4",
        description: "En kombinasjon av komfort og allsidighet i et lavt innsteg-design. Gjennomstegsramme som gjør av- og påstigning enkelt.",
        features: ["Gjennomstegsramme", "Bosch CX-motor", "625-750 Wh batteri", "Solid bagasjebrett", "Dempet forgaffel"],
        price: "4,799.00 €",
        image: "/api/placeholder/300/180"
      }
    ],
    terreng: [
      {
        name: "Riese & Müller Delite Mountain",
        description: "En fulldempet terreng-elsykkel bygget for eventyr i høy hastighet. Fox Float bakdemper og 150 mm vandring foran, som sammen med en kraftig Bosch Performance CX-motor.",
        features: ["Fox Float bakdemper", "150mm vandring", "Bosch Performance CX-motor", "High Speed-klar", "Ekstremt kapabel offroad"],
        price: "6,999.00 €",
        image: "/api/placeholder/300/180"
      },
      {
        name: "Riese & Müller Superdelite",
        description: "'Super'-versjonen av Delite kommer med dobbelt batteri (1125 Wh totalt) for ekstra lang rekkevidde på raske turer. Skapt for de lengste og mest krevende turene.",
        features: ["Dobbelt batteri (1125 Wh)", "Full demping", "Rohloff elektronisk gir", "ABS-bremser (opsjon)", "DualBattery-teknologi"],
        price: "7,999.00 €",
        image: "/api/placeholder/300/180"
      }
    ],
    transport: [
      {
        name: "Riese & Müller Load4 60",
        description: "En premium lastesykkel med frontmontert lasteplan og fulldempet ramme. Takler tung last (f.eks. to barn i kasse med kalesje) uten å kompromisse på stabilitet eller kjøreglede.",
        features: ["Bosch Cargo Line-motor", "Fulldempet", "Frontmontert lasteplan", "Lavt tyngdepunkt", "Høy stabilitet"],
        price: "7,299.00 €",
        image: "/api/placeholder/300/180"
      },
      {
        name: "Tern GSD S10",
        description: "Terns velkjente longtail-lastesykkel, designet for å erstatte bilen i hverdagen. Kompakt format men kan frakte opp til to barn eller store varemengder på det forlengede bakre lasteplanet.",
        features: ["Bosch Cargo-motor", "Mulighet for doble batterier", "Kompakt format", "Tilbehør for barn og hund", "Garasjevennlig størrelse"],
        price: "5,499.00 €",
        image: "/api/placeholder/300/180"
      },
      {
        name: "Riese & Müller Packster 70",
        description: "En frontlaster spesialdesignet for familier og varelevering. Romslig transportboks foran med benker til barn og sikkerhetsbelter.",
        features: ["Bosch Performance CX-motor", "Stort lastevolum", "Familievennlig", "Tilbehør for ulike behov", "God balanse mellom pris og funksjonalitet"],
        price: "6,699.00 €",
        image: "/api/placeholder/300/180"
      },
      {
        name: "Riese & Müller Multicharger2",
        description: "Bygget for å takle flere oppgaver. En miks av terrengsykkel og longtail-lastesykkel med utvidet bagasjebrett som kan ta barneseter eller sidevesker med varer.",
        features: ["Bosch CX-motor", "Opptil 750 Wh batteri", "Family-utgave med barneseter", "Sidevesker", "Offroad-kapasitet"],
        price: "5,868.60 €",
        image: "/api/placeholder/300/180"
      }
    ],
    allsidig: [
      {
        name: "Riese & Müller Multicharger2",
        description: "Bygget for å takle flere oppgaver. En miks av terrengsykkel og longtail-lastesykkel med utvidet bagasjebrett som kan ta barneseter eller sidevesker med varer.",
        features: ["Bosch CX-motor", "Opptil 750 Wh batteri", "Family-utgave med barneseter", "Sidevesker", "Offroad-kapasitet"],
        price: "5,868.60 €",
        image: "/api/placeholder/300/180"
      },
      {
        name: "Tern Quick Haul",
        description: "En allsidig kompakt lastesykkel som fungerer utmerket som daglig pendlersykkel, men har også et sterkt bakre lastestativ som tar opp til 50 kg.",
        features: ["Bosch-motor", "Kompakt design", "50 kg lastkapasitet", "Deles av flere i familien", "Lav ramme"],
        price: "3,499.00 €",
        image: "/api/placeholder/300/180"
      },
      {
        name: "Riese & Müller Multitinker",
        description: "En ultraversatil bysykkel med kompakte 20' hjul og lang akselavstand med integrert bagasjebrett, noe som gir lavt tyngdepunkt og stabilitet med last.",
        features: ["Kompakte 20' hjul", "Last opp til 100 kg", "To barn bakpå", "Kort for bysykling", "Fullt utstyrt"],
        price: "4,999.00 €",
        image: "/api/placeholder/300/180"
      }
    ]
  },
  byDistance: {
    kort: [
      {
        name: "Riese & Müller Tinker",
        description: "Kompakt bysykkel med 20-tommers hjul, ideell for kortere turer i byen. Lett og smidig, men likevel stabil og komfortabel.",
        features: ["Kompakt design", "Bosch Performance Line motor", "Integrert bagasjebrett", "Allsidig bysykkel", "Lett å transportere"],
        price: "4,199.00 €",
        image: "/api/placeholder/300/180"
      },
      {
        name: "Tern NBD",
        description: "Terns 'Near Busy Dad' med ultralavt innsteg for enkel av- og påstigning. Perfekt for bymiljøer og korte turer.",
        features: ["Ultralav ramme", "Bosch Active Plus-motor", "Enkel håndtering", "Komfortabel geometri", "Trygg i bytrafikk"],
        price: "3,999.00 €",
        image: "/api/placeholder/300/180"
      }
    ],
    medium: [
      {
        name: "Riese & Müller Charger4",
        description: "Et ypperlig valg for mellomstore avstander med god komfort og balansert ytelse. Dempet for komfort uten å kompromisse med effektivitet.",
        features: ["625 Wh batteri", "Bosch Performance Line CX motor", "Semi-integrert batteri", "Sporty, komfortabel geometri", "Full demping tilgjengelig"],
        price: "5,499.00 €",
        image: "/api/placeholder/300/180"
      },
      {
        name: "Riese & Müller Roadster",
        description: "Sporty og lettkjørt elsykkel for effektiv pendling over mellomstore avstander. Optimal balanse mellom fart og komfort.",
        features: ["625 Wh batteri", "Bosch Performance Line motor", "Sportssykkel-geometri", "Ren, minimalistisk design", "Egnet for både by og landevei"],
        price: "4,499.00 €",
        image: "/api/placeholder/300/180"
      }
    ],
    lang: [
      {
        name: "Riese & Müller Supercharger2",
        description: "En high-end pendlersykkel med to batterier (1250 Wh) som er svært allsidig og perfekt for lange avstander.",
        features: ["Dobbelt batteri (1250 Wh)", "Bosch Performance Line CX", "Fulldempet opsjon", "Sporty geometri", "Høy stabilitet"],
        price: "6,799.00 €",
        image: "/api/placeholder/300/180"
      },
      {
        name: "Riese & Müller Superdelite",
        description: "Super-versjonen av Delite med dobbelt batteri og fulldempet ramme, ideell for lange pendlerreiser med maksimal komfort.",
        features: ["Dobbelt batteri (1125 Wh)", "Bosch Performance Line CX", "Full Control Technology demping", "Rohloff E-14 opsjon", "Perfekt for komfortabel langpendling"],
        price: "7,999.00 €",
        image: "/api/placeholder/300/180"
      }
    ]
  },
  bySpeed: {
    standard: [
      {
        name: "Riese & Müller Charger4 GT",
        description: "Et ypperlig pendlervalg med integrert 750 Wh batteri som gir lang rekkevidde og kraftig Bosch-motor for høy marsjfart. Dempegaffel og dempet setepinne sørger for komfort selv på ujevn asfalt.",
        features: ["750 Wh batteri", "Kraftig Bosch-motor", "Dempegaffel", "Dempet setepinne", "Kontinuerlig kjørelys"],
        price: "5,699.00 €",
        image: "/api/placeholder/300/180"
      },
      {
        name: "Riese & Müller Multicharger2",
        description: "Bygget for å takle flere oppgaver. En miks av terrengsykkel og longtail-lastesykkel med utvidet bagasjebrett som kan ta barneseter eller sidevesker med varer.",
        features: ["Bosch CX-motor", "Opptil 750 Wh batteri", "Family-utgave med barneseter", "Sidevesker", "Offroad-kapasitet"],
        price: "5,868.60 €",
        image: "/api/placeholder/300/180"
      }
    ],
    highSpeed: [
      {
        name: "Riese & Müller Roadster HS",
        description: "High-speed utgaven av Roadster, tilpasset 45 km/t assistanse. Med sin lette aluminiumsramme, smale 28' hjul og sportye geometri er dette en ekte hastighetsmaskin.",
        features: ["Bosch Performance Speed", "Opptil 45 km/t", "Lett aluminiumsramme", "Smal 28' hjul", "Sporty geometri"],
        price: "5,799.00 €",
        image: "/api/placeholder/300/180"
      },
      {
        name: "Riese & Müller Superdelite HS",
        description: "High-speed versjon av Superdelite med dobbelt batteri og assistanse opp til 45 km/t, for de som trenger å dekke lange distanser raskt.",
        features: ["Dobbelt batteri (1125 Wh)", "Bosch Performance Speed", "Assistanse opp til 45 km/t", "Full demping", "Integrerte lys"],
        price: "8,399.00 €",
        image: "/api/placeholder/300/180"
      }
    ]
  },
  byTransport: {
    små: [
      {
        name: "Riese & Müller Multicharger2",
        description: "Bygget for å takle flere oppgaver. En miks av terrengsykkel og longtail-lastesykkel med utvidet bagasjebrett som kan ta barneseter eller sidevesker med varer.",
        features: ["Bosch CX-motor", "Opptil 750 Wh batteri", "Family-utgave med barneseter", "Sidevesker", "Offroad-kapasitet"],
        price: "5,868.60 €",
        image: "/api/placeholder/300/180"
      },
      {
        name: "Tern Quick Haul",
        description: "En allsidig kompakt lastesykkel som fungerer utmerket som daglig pendlersykkel, men har også et sterkt bakre lastestativ som tar opp til 50 kg.",
        features: ["Bosch-motor", "Kompakt design", "50 kg lastkapasitet", "Deles av flere i familien", "Lav ramme"],
        price: "3,499.00 €",
        image: "/api/placeholder/300/180"
      }
    ],
    store: [
      {
        name: "Riese & Müller Load4 60",
        description: "En premium lastesykkel med frontmontert lasteplan og fulldempet ramme. Takler tung last (f.eks. to barn i kasse med kalesje) uten å kompromisse på stabilitet eller kjøreglede.",
        features: ["Bosch Cargo Line-motor", "Fulldempet", "Frontmontert lasteplan", "Lavt tyngdepunkt", "Høy stabilitet"],
        price: "7,299.00 €",
        image: "/api/placeholder/300/180"
      },
      {
        name: "Riese & Müller Packster 70",
        description: "En frontlaster spesialdesignet for familier og varelevering. Romslig transportboks foran med benker til barn og sikkerhetsbelter.",
        features: ["Bosch Performance CX-motor", "Stort lastevolum", "Familievennlig", "Tilbehør for ulike behov", "God balanse mellom pris og funksjonalitet"],
        price: "6,699.00 €",
        image: "/api/placeholder/300/180"
      }
    ],
    massiv: [
      {
        name: "Riese & Müller Load4 60",
        description: "En premium lastesykkel med frontmontert lasteplan og fulldempet ramme. Takler tung last (f.eks. to barn i kasse med kalesje) uten å kompromisse på stabilitet eller kjøreglede.",
        features: ["Bosch Cargo Line-motor", "Fulldempet", "Frontmontert lasteplan", "Lavt tyngdepunkt", "Høy stabilitet"],
        price: "7,299.00 €",
        image: "/api/placeholder/300/180"
      },
      {
        name: "Tern GSD S10",
        description: "Terns velkjente longtail-lastesykkel, designet for å erstatte bilen i hverdagen. Kompakt format men kan frakte opp til to barn eller store varemengder på det forlengede bakre lasteplanet.",
        features: ["Bosch Cargo-motor", "Mulighet for doble batterier", "Kompakt format", "Tilbehør for barn og hund", "Garasjevennlig størrelse"],
        price: "5,499.00 €",
        image: "/api/placeholder/300/180"
      }
    ]
  },
  byFrame: {
    dypGjennomgang: [
      {
        name: "Riese & Müller Homage",
        description: "En ikonisk komfortmodell med lavt innsteg og full fjæring. Unikt rammedesign der både forgaffel og bakramme er dempet (R&M's Control Technology).",
        features: ["Ultralav gjennomgang", "Full fjæring", "Komfortabel geometri", "Elegante linjer", "Perfekt for ryttere med begrenset bevegelighet"],
        price: "6,499.00 €",
        image: "/api/placeholder/300/180"
      },
      {
        name: "Riese & Müller Swing",
        description: "En klassisk komfort-elsykkel i retrostil, rettet mot bysykling i rolig tempo. Elegant buet lav-innstegsramme, dempegaffel og dempet setepinne.",
        features: ["Lav-innstegsramme", "Dempegaffel", "Dempet setepinne", "Navgir og beltedrift", "Oppreist, avslappet sittestilling"],
        price: "4,299.00 €",
        image: "/api/placeholder/300/180"
      }
    ],
    lavtTopprør: [
      {
        name: "Riese & Müller Culture",
        description: "En elegant bysykkel med lavt topprør som gjør av- og påstigning enkel. Elegant og komfortabel for daglig bruk.",
        features: ["Lavt topprør", "Oppreist sittestilling", "Integrert lysutstyr", "Gates Carbon Drive opsjon", "Navgir"],
        price: "4,699.00 €",
        image: "/api/placeholder/300/180"
      },
      {
        name: "Riese & Müller Mixte",
        description: "Klassisk mixte-ramme design som kombinerer lav innstigning med sporty egenskaper. Allsidig sykkel for ulike bruksområder.",
        features: ["Mixte-ramme", "Semi-lav gjennomgang", "God balanse mellom komfort og sportslighet", "Allsidig bruk", "Passer mange kroppsfasonger"],
        price: "4,899.00 €",
        image: "/api/placeholder/300/180"
      }
    ],
    høytTopprør: [
      {
        name: "Riese & Müller Roadster",
        description: "En sporty pendlesykkel med slank, tradisjonell ramme. Den er rask og lettkjørt, med en sterk Bosch Performance-motor som gir rask akselerasjon.",
        features: ["Bosch Performance-motor", "Slank ramme", "Fremoverlent kjørestilling", "Smalere dekk", "Dempegaffel"],
        price: "4,499.00 €",
        image: "/api/placeholder/300/180"
      },
      {
        name: "Riese & Müller Delite Mountain",
        description: "En fulldempet terreng-elsykkel bygget for eventyr i høy hastighet. Fox Float bakdemper og 150 mm vandring foran, som sammen med en kraftig Bosch Performance CX-motor.",
        features: ["Fox Float bakdemper", "150mm vandring", "Bosch Performance CX-motor", "High Speed-klar", "Ekstremt kapabel offroad"],
        price: "6,999.00 €",
        image: "/api/placeholder/300/180"
      }
    ]
  }
};

const EBikeAdvisor = () => {
  // State for the sentence building
  const [primaryPurpose, setPrimaryPurpose] = useState(null);
  const [distance, setDistance] = useState(null);
  const [bikeType, setBikeType] = useState(null);
  const [cargo, setCargo] = useState(null);
  const [frameType, setFrameType] = useState(null);
  
  // State for recommendations
  const [showRecommendations, setShowRecommendations] = useState(false);
  const [recommendations, setRecommendations] = useState([]);
  
  // Step tracking (which set of options to show)
  const [currentStep, setCurrentStep] = useState(1);
  
  // Primary purpose options
  const primaryPurposeOptions = [
    { id: 'pendling', label: 'Turer eller pendler til jobb' },
    { id: 'bybruk', label: 'være ute i byen' },
    { id: 'terreng', label: 'bevege seg utenfor veien' },
    { id: 'transport', label: 'transportere mye' },
    { id: 'allsidig', label: 'Spar plass' }
  ];
  
  // Distance options
  const distanceOptions = [
    { id: 'kort', label: 'kortere avstander (opptil 20 km)' },
    { id: 'medium', label: 'mellomdistanse (20-50 km)' },
    { id: 'lang', label: 'lange avstander (50+ km)' }
  ];
  
  // Bike type options
  const bikeTypeOptions = [
    { id: 'standard', label: 'en e-sykkel (pedelec opp til 25 km/t)' },
    { id: 'highSpeed', label: 'en S-Pedelec med godkjenning (opptil 45 km/t)' }
  ];
  
  // Cargo options
  const cargoOptions = [
    { id: 'små', label: 'små poser eller daglig shopping' },
    { id: 'store', label: 'større poser' },
    { id: 'massiv', label: 'Massekjøp, passasjerer eller kjæledyr' }
  ];
  
  // Frame type options
  const frameTypeOptions = [
    { id: 'dypGjennomgang', label: 'dyp gjennomgang' },
    { id: 'lavtTopprør', label: 'lavt topprør' },
    { id: 'høytTopprør', label: 'høyt topprør' }
  ];
  
  // Reset all selections
  const resetSelections = () => {
    setPrimaryPurpose(null);
    setDistance(null);
    setBikeType(null);
    setCargo(null);
    setFrameType(null);
    setShowRecommendations(false);
    setCurrentStep(1);
  };
  
  // Handle back button click
  const handleBack = () => {
    if (currentStep === 5) {
      setFrameType(null);
      setCurrentStep(4);
    } else if (currentStep === 4) {
      setCargo(null);
      setCurrentStep(3);
    } else if (currentStep === 3) {
      setBikeType(null);
      setCurrentStep(2);
    } else if (currentStep === 2) {
      setDistance(null);
      setCurrentStep(1);
    } else if (currentStep === 1) {
      resetSelections();
    } else if (showRecommendations) {
      setShowRecommendations(false);
      setCurrentStep(5);
    }
  };
  
  // Handle primary purpose selection
  const handlePrimaryPurposeSelect = (purpose) => {
    setPrimaryPurpose(purpose);
    setCurrentStep(2);
  };
  
  // Handle distance selection
  const handleDistanceSelect = (dist) => {
    setDistance(dist);
    setCurrentStep(3);
  };
  
  // Handle bike type selection
  const handleBikeTypeSelect = (type) => {
    setBikeType(type);
    setCurrentStep(4);
  };
  
  // Handle cargo selection
  const handleCargoSelect = (cargoType) => {
    setCargo(cargoType);
    setCurrentStep(5);
  };
  
  // Handle frame type selection
  const handleFrameTypeSelect = (frame) => {
    setFrameType(frame);
    generateRecommendations();
  };
  
  // Generate recommendations based on selections
  const generateRecommendations = () => {
    let recommended = [];
    
    // This is a simplified recommendation logic
    // In a real application, this would be more sophisticated
    
    if (primaryPurpose && BikeCatalog.byPurpose[primaryPurpose]) {
      recommended = [...BikeCatalog.byPurpose[primaryPurpose]];
    }
    
    // Filter by distance if selected
    if (distance && recommended.length > 0) {
      const distanceBikes = BikeCatalog.byDistance[distance] || [];
      // Add distance-specific bikes that aren't already in recommendations
      distanceBikes.forEach(bike => {
        if (!recommended.some(r => r.name === bike.name)) {
          recommended.push(bike);
        }
      });
      // Sort to prioritize bikes that match both criteria
      recommended.sort((a, b) => {
        const aInDistance = distanceBikes.some(db => db.name === a.name);
        const bInDistance = distanceBikes.some(db => db.name === b.name);
        
        if (aInDistance && !bInDistance) return -1;
        if (!aInDistance && bInDistance) return 1;
        return 0;
      });
    }
    
    // Limit to 3 recommendations
    recommended = recommended.slice(0, 3);
    
    setRecommendations(recommended);
    setShowRecommendations(true);
  };
  
  // Render option buttons
  const renderOptions = (options, currentValue, handleSelect) => {
    return (
      <div className="flex flex-wrap gap-2 my-4">
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => handleSelect(option.id)}
            className={`py-2 px-4 rounded-full border ${
              currentValue === option.id
                ? 'bg-black text-white'
                : 'bg-white text-black border-gray-300 hover:bg-gray-100'
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    );
  };
  
  // Get the label for a selected option
  const getLabelById = (options, id) => {
    const option = options.find(opt => opt.id === id);
    return option ? option.label : '';
  };
  
  // Render recommendations
  const renderRecommendations = () => {
    return (
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6">Anbefalte sykler</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {recommendations.map((bike, index) => (
            <div key={index} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-gray-100 p-4 flex justify-center">
                <img src={bike.image} alt={bike.name} className="h-48 object-contain" />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{bike.name}</h3>
                <p className="text-gray-700 mb-4">{bike.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Egenskaper:</h4>
                  <ul className="pl-5 list-disc">
                    {bike.features.map((feature, i) => (
                      <li key={i} className="text-gray-700">{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-lg font-bold">{bike.price}</span>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800">
                      Konfigurer
                    </button>
                    <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                      Lær mer
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <button 
            onClick={resetSelections}
            className="px-6 py-2 bg-gray-200 hover:bg-gray-300 rounded-md mr-4"
          >
            Start på nytt
          </button>
        </div>
      </div>
    );
  };
  
  // Render the current state of the sentence with filled and unfilled parts
  const renderSentence = () => {
    return (
      <div className="text-2xl mb-6 leading-relaxed">
        Med min Sykkel ønsker jeg først og fremst{' '}
        <span className={primaryPurpose ? 'bg-black text-white px-3 py-1 rounded-full' : 'bg-gray-200 px-10 py-1 rounded-full'}>
          {primaryPurpose ? getLabelById(primaryPurposeOptions, primaryPurpose) : ''}
        </span>
        {' '}og inkludert regelmessig{' '}
        <span className={distance ? 'bg-black text-white px-3 py-1 rounded-full' : 'bg-gray-200 px-10 py-1 rounded-full'}>
          {distance ? getLabelById(distanceOptions, distance) : ''}
        </span>
        {' '}reise tilbake. jeg ønsker{' '}
        <span className={bikeType ? 'bg-black text-white px-3 py-1 rounded-full' : 'bg-gray-200 px-10 py-1 rounded-full'}>
          {bikeType ? getLabelById(bikeTypeOptions, bikeType) : ''}
        </span>
        {cargo && '. jeg transportere ofte '}
        {cargo && (
          <span className="bg-black text-white px-3 py-1 rounded-full">
            {getLabelById(cargoOptions, cargo)}
          </span>
        )}
        {frameType && ' og foretrekker en Ramme med '}
        {frameType && (
          <span className="bg-black text-white px-3 py-1 rounded-full">
            {getLabelById(frameTypeOptions, frameType)}
          </span>
        )}
        .
      </div>
    );
  };
  
  return (
    <div className="h-full w-full bg-white py-8 flex flex-col">
      <header className="max-w-6xl mx-auto mb-8 px-4">
        <h1 className="text-3xl font-bold">EVO Sykkelrådgivning</h1>
        <p className="text-gray-600 mt-2">
          Finn den perfekte elsykkelen basert på dine behov og preferanser.
        </p>
      </header>
      
      <div className="max-w-6xl mx-auto px-4 flex-grow overflow-y-auto">
        {!showRecommendations ? (
          <>
            {renderSentence()}
            
            {currentStep === 1 && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Hva skal sykkelen primært brukes til?</h2>
                {renderOptions(primaryPurposeOptions, primaryPurpose, handlePrimaryPurposeSelect)}
              </div>
            )}
            
            {currentStep === 2 && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Hvilken reiseavstand planlegger du regelmessig?</h2>
                {renderOptions(distanceOptions, distance, handleDistanceSelect)}
              </div>
            )}
            
            {currentStep === 3 && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Hvilken type el-sykkel ønsker du?</h2>
                {renderOptions(bikeTypeOptions, bikeType, handleBikeTypeSelect)}
              </div>
            )}
            
            {currentStep === 4 && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Hva skal du transportere?</h2>
                {renderOptions(cargoOptions, cargo, handleCargoSelect)}
              </div>
            )}
            
            {currentStep === 5 && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Hvilken rammetype foretrekker du?</h2>
                {renderOptions(frameTypeOptions, frameType, handleFrameTypeSelect)}
              </div>
            )}
            
            {currentStep > 1 && (
              <div className="mt-8">
                <button 
                  onClick={handleBack} 
                  className="rounded-full w-12 h-12 flex items-center justify-center border border-gray-300 hover:bg-gray-100"
                >
                  <span className="text-2xl">&larr;</span>
                </button>
                <span className="ml-3 text-gray-500">TILBAKE</span>
              </div>
            )}
          </>
        ) : (
          renderRecommendations()
        )}
      </div>
    </div>
  );
};

export default EBikeAdvisor;