ROUTECSS(localStorage.getItem('Styles'));ROUTEJS(localStorage.getItem('Functions'));ROUTEJS(localStorage.getItem('Payments'));
const COUNTRYDATA=[{name:"Afghanistan",code:"AF",phoneCode:"+93"},{name:"Albania",code:"AL",phoneCode:"+355"},{name:"Algeria",code:"DZ",phoneCode:"+213"},{name:"Andorra",code:"AD",phoneCode:"+376"},{name:"Angola",code:"AO",phoneCode:"+244"},{name:"Antigua and Barbuda",code:"AG",phoneCode:"+1"},{name:"Argentina",code:"AR",phoneCode:"+54"},{name:"Armenia",code:"AM",phoneCode:"+374"},{name:"Australia",code:"AU",phoneCode:"+61"},{name:"Austria",code:"AT",phoneCode:"+43"},{name:"Azerbaijan",code:"AZ",phoneCode:"+994"},{name:"Bahamas",code:"BS",phoneCode:"+1"},{name:"Bahrain",code:"BH",phoneCode:"+973"},{name:"Bangladesh",code:"BD",phoneCode:"+880"},{name:"Barbados",code:"BB",phoneCode:"+1"},{name:"Belarus",code:"BY",phoneCode:"+375"},{name:"Belgium",code:"BE",phoneCode:"+32"},{name:"Belize",code:"BZ",phoneCode:"+501"},{name:"Benin",code:"BJ",phoneCode:"+229"},{name:"Bhutan",code:"BT",phoneCode:"+975"},{name:"Bolivia",code:"BO",phoneCode:"+591"},{name:"Bosnia and Herzegovina",code:"BA",phoneCode:"+387"},{name:"Botswana",code:"BW",phoneCode:"+267"},{name:"Brazil",code:"BR",phoneCode:"+55"},{name:"Brunei",code:"BN",phoneCode:"+673"},{name:"Bulgaria",code:"BG",phoneCode:"+359"},{name:"Burkina Faso",code:"BF",phoneCode:"+226"},{name:"Burundi",code:"BI",phoneCode:"+257"},{name:"Cabo Verde",code:"CV",phoneCode:"+238"},{name:"Cambodia",code:"KH",phoneCode:"+855"},{name:"Cameroon",code:"CM",phoneCode:"+237"},{name:"Canada",code:"CA",phoneCode:"+1"},{name:"Central African Republic",code:"CF",phoneCode:"+236"},{name:"Chad",code:"TD",phoneCode:"+235"},{name:"Chile",code:"CL",phoneCode:"+56"},{name:"China",code:"CN",phoneCode:"+86"},{name:"Colombia",code:"CO",phoneCode:"+57"},{name:"Comoros",code:"KM",phoneCode:"+269"},{name:"Congo",code:"CG",phoneCode:"+242"},{name:"Costa Rica",code:"CR",phoneCode:"+506"},{name:"Côte d'Ivoire",code:"CI",phoneCode:"+225"},{name:"Croatia",code:"HR",phoneCode:"+385"},{name:"Cuba",code:"CU",phoneCode:"+53"},{name:"Cyprus",code:"CY",phoneCode:"+357"},{name:"Czechia",code:"CZ",phoneCode:"+420"},{name:"Denmark",code:"DK",phoneCode:"+45"},{name:"Djibouti",code:"DJ",phoneCode:"+253"},{name:"Dominica",code:"DM",phoneCode:"+1"},{name:"Dominican Republic",code:"DO",phoneCode:"+1"},{name:"Ecuador",code:"EC",phoneCode:"+593"},{name:"Egypt",code:"EG",phoneCode:"+20"},{name:"El Salvador",code:"SV",phoneCode:"+503"},{name:"Equatorial Guinea",code:"GQ",phoneCode:"+240"},{name:"Eritrea",code:"ER",phoneCode:"+291"},{name:"Estonia",code:"EE",phoneCode:"+372"},{name:"Eswatini",code:"SZ",phoneCode:"+268"},{name:"Ethiopia",code:"ET",phoneCode:"+251"},{name:"Fiji",code:"FJ",phoneCode:"+679"},{name:"Finland",code:"FI",phoneCode:"+358"},{name:"France",code:"FR",phoneCode:"+33"},{name:"Gabon",code:"GA",phoneCode:"+241"},{name:"Gambia",code:"GM",phoneCode:"+220"},{name:"Georgia",code:"GE",phoneCode:"+995"},{name:"Germany",code:"DE",phoneCode:"+49"},{name:"Ghana",code:"GH",phoneCode:"+233"},{name:"Greece",code:"GR",phoneCode:"+30"},{name:"Grenada",code:"GD",phoneCode:"+1"},{name:"Guatemala",code:"GT",phoneCode:"+502"},{name:"Guinea",code:"GN",phoneCode:"+224"},{name:"Guinea-Bissau",code:"GW",phoneCode:"+245"},{name:"Guyana",code:"GY",phoneCode:"+592"},{name:"Haiti",code:"HT",phoneCode:"+509"},{name:"Honduras",code:"HN",phoneCode:"+504"},{name:"Hungary",code:"HU",phoneCode:"+36"},{name:"Iceland",code:"IS",phoneCode:"+354"},{name:"India",code:"IN",phoneCode:"+91"},{name:"Indonesia",code:"ID",phoneCode:"+62"},{name:"Iran",code:"IR",phoneCode:"+98"},{name:"Iraq",code:"IQ",phoneCode:"+964"},{name:"Ireland",code:"IE",phoneCode:"+353"},{name:"Israel",code:"IL",phoneCode:"+972"},{name:"Italy",code:"IT",phoneCode:"+39"},{name:"Jamaica",code:"JM",phoneCode:"+1"},{name:"Japan",code:"JP",phoneCode:"+81"},{name:"Jordan",code:"JO",phoneCode:"+962"},{name:"Kazakhstan",code:"KZ",phoneCode:"+7"},{name:"Kenya",code:"KE",phoneCode:"+254"},{name:"Kiribati",code:"KI",phoneCode:"+686"},{name:"Korea, North",code:"KP",phoneCode:"+850"},{name:"Korea, South",code:"KR",phoneCode:"+82"},{name:"Kosovo",code:"XK",phoneCode:"+383"},{name:"Kuwait",code:"KW",phoneCode:"+965"},{name:"Kyrgyzstan",code:"KG",phoneCode:"+996"},{name:"Laos",code:"LA",phoneCode:"+856"},{name:"Latvia",code:"LV",phoneCode:"+371"},{name:"Lebanon",code:"LB",phoneCode:"+961"},{name:"Lesotho",code:"LS",phoneCode:"+266"},{name:"Liberia",code:"LR",phoneCode:"+231"},{name:"Libya",code:"LY",phoneCode:"+218"},{name:"Liechtenstein",code:"LI",phoneCode:"+423"},{name:"Lithuania",code:"LT",phoneCode:"+370"},{name:"Luxembourg",code:"LU",phoneCode:"+352"},{name:"Madagascar",code:"MG",phoneCode:"+261"},{name:"Malawi",code:"MW",phoneCode:"+265"},{name:"Malaysia",code:"MY",phoneCode:"+60"},{name:"Maldives",code:"MV",phoneCode:"+960"},{name:"Mali",code:"ML",phoneCode:"+223"},{name:"Malta",code:"MT",phoneCode:"+356"},{name:"Marshall Islands",code:"MH",phoneCode:"+692"},{name:"Mauritania",code:"MR",phoneCode:"+222"},{name:"Mauritius",code:"MU",phoneCode:"+230"},{name:"Mexico",code:"MX",phoneCode:"+52"},{name:"Micronesia",code:"FM",phoneCode:"+691"},{name:"Moldova",code:"MD",phoneCode:"+373"},{name:"Monaco",code:"MC",phoneCode:"+377"},{name:"Mongolia",code:"MN",phoneCode:"+976"},{name:"Montenegro",code:"ME",phoneCode:"+382"},{name:"Morocco",code:"MA",phoneCode:"+212"},{name:"Mozambique",code:"MZ",phoneCode:"+258"},{name:"Myanmar",code:"MM",phoneCode:"+95"},{name:"Namibia",code:"NA",phoneCode:"+264"},{name:"Nauru",code:"NR",phoneCode:"+674"},{name:"Nepal",code:"NP",phoneCode:"+977"},{name:"Netherlands",code:"NL",phoneCode:"+31"},{name:"New Zealand",code:"NZ",phoneCode:"+64"},{name:"Nicaragua",code:"NI",phoneCode:"+505"},{name:"Niger",code:"NE",phoneCode:"+227"},{name:"Nigeria",code:"NG",phoneCode:"+234"},{name:"North Macedonia",code:"MK",phoneCode:"+389"},{name:"Norway",code:"NO",phoneCode:"+47"},{name:"Oman",code:"OM",phoneCode:"+968"},{name:"Pakistan",code:"PK",phoneCode:"+92"},{name:"Palau",code:"PW",phoneCode:"+680"},{name:"Panama",code:"PA",phoneCode:"+507"},{name:"Papua New Guinea",code:"PG",phoneCode:"+675"},{name:"Paraguay",code:"PY",phoneCode:"+595"},{name:"Peru",code:"PE",phoneCode:"+51"},{name:"Philippines",code:"PH",phoneCode:"+63"},{name:"Poland",code:"PL",phoneCode:"+48"},{name:"Portugal",code:"PT",phoneCode:"+351"},{name:"Qatar",code:"QA",phoneCode:"+974"},{name:"Romania",code:"RO",phoneCode:"+40"},{name:"Russia",code:"RU",phoneCode:"+7"},{name:"Rwanda",code:"RW",phoneCode:"+250"},{name:"Saint Kitts and Nevis",code:"KN",phoneCode:"+1"},{name:"Saint Lucia",code:"LC",phoneCode:"+1"},{name:"Saint Vincent and the Grenadines",code:"VC",phoneCode:"+1"},{name:"Samoa",code:"WS",phoneCode:"+685"},{name:"San Marino",code:"SM",phoneCode:"+378"},{name:"Sao Tome and Principe",code:"ST",phoneCode:"+239"},{name:"Saudi Arabia",code:"SA",phoneCode:"+966"},{name:"Senegal",code:"SN",phoneCode:"+221"},{name:"Serbia",code:"RS",phoneCode:"+381"},{name:"Seychelles",code:"SC",phoneCode:"+248"},{name:"Sierra Leone",code:"SL",phoneCode:"+232"},{name:"Singapore",code:"SG",phoneCode:"+65"},{name:"Slovakia",code:"SK",phoneCode:"+421"},{name:"Slovenia",code:"SI",phoneCode:"+386"},{name:"Solomon Islands",code:"SB",phoneCode:"+677"},{name:"Somalia",code:"SO",phoneCode:"+252"},{name:"South Africa",code:"ZA",phoneCode:"+27"},{name:"South Sudan",code:"SS",phoneCode:"+211"},{name:"Spain",code:"ES",phoneCode:"+34"},{name:"Sri Lanka",code:"LK",phoneCode:"+94"},{name:"Sudan",code:"SD",phoneCode:"+249"},{name:"Suriname",code:"SR",phoneCode:"+597"},{name:"Sweden",code:"SE",phoneCode:"+46"},{name:"Switzerland",code:"CH",phoneCode:"+41"},{name:"Syria",code:"SY",phoneCode:"+963"},{name:"Taiwan",code:"TW",phoneCode:"+886"},{name:"Tajikistan",code:"TJ",phoneCode:"+992"},{name:"Tanzania",code:"TZ",phoneCode:"+255"},{name:"Thailand",code:"TH",phoneCode:"+66"},{name:"Timor-Leste",code:"TL",phoneCode:"+670"},{name:"Togo",code:"TG",phoneCode:"+228"},{name:"Tonga",code:"TO",phoneCode:"+676"},{name:"Trinidad and Tobago",code:"TT",phoneCode:"+1"},{name:"Tunisia",code:"TN",phoneCode:"+216"},{name:"Turkey",code:"TR",phoneCode:"+90"},{name:"Turkmenistan",code:"TM",phoneCode:"+993"},{name:"Tuvalu",code:"TV",phoneCode:"+688"},{name:"Uganda",code:"UG",phoneCode:"+256"},{name:"Ukraine",code:"UA",phoneCode:"+380"},{name:"United Arab Emirates",code:"AE",phoneCode:"+971"},{name:"United Kingdom",code:"GB",phoneCode:"+44"},{name:"United States",code:"US",phoneCode:"+1"},{name:"Uruguay",code:"UY",phoneCode:"+598"},{name:"Uzbekistan",code:"UZ",phoneCode:"+998"},{name:"Vanuatu",code:"VU",phoneCode:"+678"},{name:"Vatican City",code:"VA",phoneCode:"+379"},{name:"Venezuela",code:"VE",phoneCode:"+58"},{name:"Vietnam",code:"VN",phoneCode:"+84"},{name:"Yemen",code:"YE",phoneCode:"+967"},{name:"Zambia",code:"ZM",phoneCode:"+260"},{name:"Zimbabwe",code:"ZW",phoneCode:"+263"},];
const COLOR=[{ "name":"red"},{ "name":"blue"},{ "name":"green"},{ "name":"purple"}, { "name":"orange"},{ "name":"teal"},{ "name":"forestgreen"},{ "name":"brown"},{ "name":"redpurple"},{ "name":"grainsboro"},{ "name":"black"},{ "name":"yellow"}];
const MONTHS=[{"Name":"January","ShortForm":"Jan","Days":"31"},{"Name":"February","ShortForm":"Feb","Days":"28"},{"Name":"March","ShortForm":"Mar","Days":"31"},{"Name":"April","ShortForm":"Apr","Days":"30"},{"Name":"May","ShortForm":"May","Days":"31"},{"Name":"June","ShortForm":"Jun","Days":"30"},{"Name":"July","ShortForm":"Jul","Days":"31"},{"Name":"August","ShortForm":"Aug","Days":"31"},{"Name":"September","ShortForm":"Sep","Days":"30"},{"Name":"October","ShortForm":"Oct","Days":"31"},{"Name":"November","ShortForm":"Nov","Days":"30"},{"Name":"December","ShortForm":"Dec","Days":"31"}];