

// idioms.js - 100 Global Idioms Translated Literally
const IDIOM_POOL = [
  // European Languages
  {
    language: "German",
    original: "Jemandem einen Bären aufbinden",
    literal: "“To tie a bear onto someone”",
    meaning: "To trick or fool someone with a tall tale",
    decoys: ["To burden someone with heavy financial debt", "To give an overwhelmingly tight hug"]
  },
  {
    language: "German",
    original: "Tomaten auf den Augen haben",
    literal: "“To have tomatoes on one's eyes”",
    meaning: "To be oblivious to what is clearly visible",
    decoys: ["To cry uncontrollably from embarrassment", "To see everything in a favorable light"]
  },
  {
    language: "German",
    original: "Das ist mir Wurst",
    literal: "“That is sausage to me”",
    meaning: "I don't care at all / it makes no difference to me",
    decoys: ["That is an absolute mess", "That is an expensive luxury"]
  },
  {
    language: "German",
    original: "Seinen Senf dazugeben",
    literal: "“To add one's mustard”",
    meaning: "To offer an unsolicited opinion or chime in",
    decoys: ["To make an argument much worse", "To add unnecessary drama to a situation"]
  },
  {
    language: "German",
    original: "Um den heißen Brei herumreden",
    literal: "“To talk around the hot porridge”",
    meaning: "To beat around the bush and avoid the main point",
    decoys: ["To boast about wealth you don't possess", "To gossip about someone behind their back"]
  },
  {
    language: "German",
    original: "Ich verstehe nur Bahnhof",
    literal: "“I only understand train station”",
    meaning: "It's all Greek to me / I don't understand a single word",
    decoys: ["I need to leave immediately", "I am waiting for someone who is late"]
  },
  {
    language: "French",
    original: "Avoir le cafard",
    literal: "“To have the cockroach”",
    meaning: "To feel depressed, gloomy, or down in the dumps",
    decoys: ["To be caught red-handed in a lie", "To have an annoying persistent itch"]
  },
  {
    language: "French",
    original: "Pédaler dans la semoule",
    literal: "“To pedal in the couscous”",
    meaning: "To struggle and make zero progress",
    decoys: ["To make an embarrassing mess in public", "To rush into a task without a plan"]
  },
  {
    language: "French",
    original: "Poser un lapin",
    literal: "“To put down a rabbit”",
    meaning: "To stand someone up on a date or meeting",
    decoys: ["To present an unexpected gift", "To make a quick escape from a party"]
  },
  {
    language: "French",
    original: "Avoir les yeux plus gros que le ventre",
    literal: "“To have eyes bigger than the belly”",
    meaning: "To take on more than one can handle or eat",
    decoys: ["To be extremely greedy about money", "To stare rudely at a stranger"]
  },
  {
    language: "French",
    original: "Raconter des salades",
    literal: "“To tell salads”",
    meaning: "To spin elaborate lies or make up excuses",
    decoys: ["To talk about boring culinary topics", "To deliver healthy lifestyle advice"]
  },
  {
    language: "French",
    original: "Tomber dans les pommes",
    literal: "“To fall into the apples”",
    meaning: "To faint or lose consciousness",
    decoys: ["To fall madly in love at first sight", "To have a sudden stroke of good luck"]
  },
  {
    language: "Spanish",
    original: "Estar de mala leche",
    literal: "“To be of bad milk”",
    meaning: "To be in a foul mood or bad temper",
    decoys: ["To be physically fragile or sickly", "To have run out of money"]
  },
  {
    language: "Spanish",
    original: "Meter la pata",
    literal: "“To put the paw in it”",
    meaning: "To put one's foot in one's mouth / mess up",
    decoys: ["To step into an illegal activity", "To intervene in a fight unwanted"]
  },
  {
    language: "Spanish",
    original: "Tener un humor de perros",
    literal: "“To have a dog's mood”",
    meaning: "To be extremely grumpy and irritable",
    decoys: ["To be loyal and blindly obedient", "To be energetic and playful"]
  },
  {
    language: "Spanish",
    original: "Ser pan comido",
    literal: "“To be eaten bread”",
    meaning: "To be a piece of cake / very easy",
    decoys: ["To be completely exhausted", "To be taken advantage of"]
  },
  {
    language: "Spanish",
    original: "Buscarle tres pies al gato",
    literal: "“To look for three feet on a cat”",
    meaning: "To overcomplicate a simple matter unnecessarily",
    decoys: ["To search for something impossible to find", "To provoke someone who is dangerous"]
  },
  {
    language: "Spanish",
    original: "Tomar el pelo",
    literal: "“To take the hair”",
    meaning: "To pull someone's leg / tease someone",
    decoys: ["To insult someone's appearance", "To rob someone quietly"]
  },
  {
    language: "Spanish",
    original: "Estar como una cabra",
    literal: "“To be like a goat”",
    meaning: "To be totally crazy or eccentric",
    decoys: ["To eat absolutely anything", "To be stubborn and unyielding"]
  },
  {
    language: "Italian",
    original: "Non avere peli sulla lingua",
    literal: "“To have no hairs on one's tongue”",
    meaning: "To speak bluntly and without a filter",
    decoys: ["To speak a foreign language fluently", "To be unable to keep down food"]
  },
  {
    language: "Italian",
    original: "In bocca al lupo",
    literal: "“Into the wolf's mouth”",
    meaning: "Good luck / break a leg",
    decoys: ["To walk straight into danger", "To fall into debt"]
  },
  {
    language: "Italian",
    original: "Avere le mani bucate",
    literal: "“To have holey hands”",
    meaning: "To be a big spender who cannot save money",
    decoys: ["To drop objects constantly", "To be clumsy at manual crafts"]
  },
  {
    language: "Italian",
    original: "Prendere lucciole per lanterne",
    literal: "“To take fireflies for lanterns”",
    meaning: "To make a huge blunder by misjudging things",
    decoys: ["To celebrate before winning", "To be afraid of small things in the dark"]
  },
  {
    language: "Italian",
    original: "Piove sul bagnato",
    literal: "“It rains on the wet”",
    meaning: "Misfortunes pile onto those already suffering (or rich get richer)",
    decoys: ["Wasting water during a drought", "Crying over spilled milk"]
  },
  {
    language: "Portuguese",
    original: "Pagar o pato",
    literal: "“To pay the duck”",
    meaning: "To take the blame for someone else's mistake",
    decoys: ["To pay an exorbitant restaurant bill", "To make a bad purchase"]
  },
  {
    language: "Portuguese",
    original: "Chutar o balde",
    literal: "“To kick the bucket”",
    meaning: "To give up completely / lose one's temper and quit",
    decoys: ["To pass away / die", "To celebrate recklessly"]
  },
  {
    language: "Portuguese",
    original: "Engolir sapos",
    literal: "“To swallow frogs”",
    meaning: "To endure unpleasant insults without speaking back",
    decoys: ["To eat disgusting food out of politeness", "To choke on one's own words"]
  },
  {
    language: "Portuguese",
    original: "Tirar o cavalinho da chuva",
    literal: "“To take the little horse out of the rain”",
    meaning: "To give up hope because something is not happening",
    decoys: ["To protect valuable assets from loss", "To bring guests inside quickly"]
  },
  {
    language: "Swedish",
    original: "Glida in på en räkmacka",
    literal: "“To slide in on a shrimp sandwich”",
    meaning: "To succeed effortlessly without working hard",
    decoys: ["To arrive late to a fancy banquet", "To slip and embarrass oneself publicly"]
  },
  {
    language: "Swedish",
    original: "Att ana ugglor i mossen",
    literal: "“To sense owls in the bog”",
    meaning: "To suspect foul play / smell a rat",
    decoys: ["To get completely lost in the woods", "To stay awake through the night"]
  },
  {
    language: "Swedish",
    original: "Ha en gås oplockad med någon",
    literal: "“To have an unplucked goose with someone”",
    meaning: "To have a bone to pick / unresolved grievance",
    decoys: ["To share an unfinished meal", "To owe money to an old friend"]
  },
  {
    language: "Swedish",
    original: "Skita i det blå skåpet",
    literal: "“To poop in the blue cupboard”",
    meaning: "To cross the line and make a catastrophic mistake",
    decoys: ["To hide dirty laundry from visitors", "To ruin expensive antique furniture"]
  },
  {
    language: "Norwegian",
    original: "Å være midt i smørøyet",
    literal: "“To be right in the butter eye”",
    meaning: "To be in the absolute best, most ideal position",
    decoys: ["To be caught in a slippery trap", "To overindulge in rich foods"]
  },
  {
    language: "Norwegian",
    original: "Å svelge noen kameler",
    literal: "“To swallow some camels”",
    meaning: "To make a major compromise against your principles",
    decoys: ["To brag about impossible achievements", "To travel across harsh terrain"]
  },
  {
    language: "Danish",
    original: "At gå agurk",
    literal: "“To go cucumber”",
    meaning: "To go crazy, berserk, or wild",
    decoys: ["To stay completely calm under pressure", "To turn pale from fright"]
  },
  {
    language: "Danish",
    original: "At skyde papegøjen",
    literal: "“To shoot the parrot”",
    meaning: "To strike it rich or hit the jackpot",
    decoys: ["To silence someone who talks too much", "To ruin a colorful celebration"]
  },
  {
    language: "Dutch",
    original: "Nu komt de aap uit de mouw",
    literal: "“Now the monkey comes out of the sleeve”",
    meaning: "The true hidden motive or truth is finally revealed",
    decoys: ["A chaotic situation gets out of hand", "An unwanted guest arrives unexpectedly"]
  },
  {
    language: "Dutch",
    original: "Helaas pindakaas",
    literal: "“Unfortunately, peanut butter”",
    meaning: "Too bad / that's tough luck (said lightheartedly)",
    decoys: ["A sticky situation with no solution", "An appetizer made on short notice"]
  },
  {
    language: "Dutch",
    original: "Met de gebakken peren zitten",
    literal: "“To be left sitting with the baked pears”",
    meaning: "To be left to deal with the messy consequences",
    decoys: ["To be treated to a delicious meal", "To be stuck waiting for a late date"]
  },
  {
    language: "Dutch",
    original: "Over koetjes en kalfjes praten",
    literal: "“To talk about little cows and calves”",
    meaning: "To make small talk about trivial matters",
    decoys: ["To discuss farm finances", "To tell stories about childhood"]
  },
  {
    language: "Polish",
    original: "Musztarda po obiedzie",
    literal: "“Mustard after dinner”",
    meaning: "An action taken too late to be useful",
    decoys: ["An unexpected bonus after hard work", "An argument that ruined dessert"]
  },
  {
    language: "Polish",
    original: "Rzucać grochem o ścianę",
    literal: "“To throw peas against a wall”",
    meaning: "To talk to someone who refuses to listen (talking to a brick wall)",
    decoys: ["To waste food during an argument", "To practice aim in target shooting"]
  },
  {
    language: "Polish",
    original: "Wiercić dziurę w brzuchu",
    literal: "“To drill a hole in someone's stomach”",
    meaning: "To badger or nag someone relentlessly until they give in",
    decoys: ["To inflict deep emotional pain", "To eat until you feel sick"]
  },
  {
    language: "Russian",
    original: "Вешать лапшу на уши",
    literal: "“To hang noodles on someone's ears”",
    meaning: "To mislead, fool, or tell bold lies to someone",
    decoys: ["To tell a story that makes someone hungry", "To eavesdrop on a private conversation"]
  },
  {
    language: "Russian",
    original: "Делать из мухи слона",
    literal: "“To make an elephant out of a fly”",
    meaning: "To make a mountain out of a molehill / exaggerate wildly",
    decoys: ["To turn a tiny profit into a fortune", "To make a big mess out of a tiny error"]
  },
  {
    language: "Russian",
    original: "Когда рак на горе свистнет",
    literal: "“When the crawfish whistles on the mountain”",
    meaning: "When pigs fly / an event that will never happen",
    decoys: ["When winter arrives unexpectedly early", "When old enemies reconcile"]
  },
  {
    language: "Russian",
    original: "Смотреть как баран на новые ворота",
    literal: "“To stare like a ram at a new gate”",
    meaning: "To look utterly baffled or dumbfounded by something",
    decoys: ["To stand guard with stubborn determination", "To be stubborn and refuse to budge"]
  },
  {
    language: "Greek",
    original: "Έπιασε ο παπάς τα γένια του",
    literal: "“The priest grabbed his beard”",
    meaning: "To be in total despair or panic",
    decoys: ["To stroke your chin in deep thought", "To prepare for a religious service"]
  },
  {
    language: "Greek",
    original: "Κάνει την πάπια",
    literal: "“To do the duck”",
    meaning: "To pretend to know nothing / play dumb",
    decoys: ["To waddle clumsily when tired", "To talk loud and annoyingly"]
  },
  {
    language: "Greek",
    original: "Μου άλλαξε τα φώτα",
    literal: "“He changed my lights”",
    meaning: "He beat me up or gave me a very hard time",
    decoys: ["He gave me a brilliant new perspective", "He helped me renovate my home"]
  },
  {
    language: "Finnish",
    original: "Puhua ohi suunsa",
    literal: "“To speak past one's mouth”",
    meaning: "To accidentally let a secret slip",
    decoys: ["To speak unintelligibly while eating", "To boast about something you didn't do"]
  },
  {
    language: "Finnish",
    original: "Kiertää kuin kissa kuumaa puuroa",
    literal: "“To pace around hot porridge like a cat”",
    meaning: "To dance around an uncomfortable topic without addressing it",
    decoys: ["To wait eagerly for a home-cooked meal", "To avoid a dangerous enemy"]
  },

  // Asian & Middle Eastern Languages
  {
    language: "Japanese",
    original: "猫をかぶる (Neko o kaburu)",
    literal: "“To wear a cat on one's head”",
    meaning: "To feign innocence and hide one's mischievous nature",
    decoys: ["To have wild bedhead hair in the morning", "To be excessively warm in winter"]
  },
  {
    language: "Japanese",
    original: "猿も木から落ちる (Saru mo ki kara ochiru)",
    literal: "“Even monkeys fall from trees”",
    meaning: "Even the greatest experts make mistakes sometimes",
    decoys: ["Pride always leads to a sudden downfall", "Nature is unpredictable and chaotic"]
  },
  {
    language: "Japanese",
    original: "胡麻をする (Goma o suru)",
    literal: "“To grind sesame seeds”",
    meaning: "To flatter or butter up one's boss/superior",
    decoys: ["To prepare a meal meticulously", "To work hard for very little pay"]
  },
  {
    language: "Japanese",
    original: "喉から手が出る (Nodo kara te ga deru)",
    literal: "“A hand comes out from the throat”",
    meaning: "To desperately want or crave something",
    decoys: ["To be violently nauseous", "To speak without thinking first"]
  },
  {
    language: "Japanese",
    original: "足が出る (Ashi ga deru)",
    literal: "“A foot sticks out”",
    meaning: "To go over budget or run up a financial deficit",
    decoys: ["To get caught trying to leave quietly", "To trip over one's own mistake"]
  },
  {
    language: "Japanese",
    original: "腹を割る (Hara o waru)",
    literal: "“To split one's belly open”",
    meaning: "To speak with complete frankness and honesty",
    decoys: ["To laugh uncontrollably at a joke", "To eat until you can barely walk"]
  },
  {
    language: "Japanese",
    original: "耳にたこができる (Mimi ni tako ga dekiru)",
    literal: "“Calluses form on one's ears”",
    meaning: "To be sick and tired of hearing the same thing repeatedly",
    decoys: ["To develop acute hearing in the dark", "To listen to loud music through headphones"]
  },
  {
    language: "Chinese (Mandarin)",
    original: "画蛇添足 (Huà shé tiān zú)",
    literal: "“To draw a snake and add feet”",
    meaning: "To ruin something good by adding unnecessary extras",
    decoys: ["To encounter an impossible creature", "To rush through an art project"]
  },
  {
    language: "Chinese (Mandarin)",
    original: "对牛弹琴 (Duì niú tán qín)",
    literal: "“To play the lute to a cow”",
    meaning: "To waste good advice or art on an unappreciative audience",
    decoys: ["To practice an instrument outdoors", "To talk to livestock when lonely"]
  },
  {
    language: "Chinese (Mandarin)",
    original: "沉鱼落雁 (Chén yú luò yàn)",
    literal: "“Fish sink and wild geese drop from the sky”",
    meaning: "An idiom describing breathtakingly dazzling female beauty",
    decoys: ["A terrible environmental catastrophe", "A storm so fierce birds cannot fly"]
  },
  {
    language: "Chinese (Mandarin)",
    original: "塞翁失马 (Sài wēng shī mǎ)",
    literal: "“The old frontiersman loses his horse”",
    meaning: "A blessing in disguise / bad luck turning out to be good",
    decoys: ["A careless mistake leading to ruin", "A journey delayed by misfortune"]
  },
  {
    language: "Chinese (Mandarin)",
    original: "班门弄斧 (Bān mén nòng fǔ)",
    literal: "“To show off your axe in front of Lu Ban's gate”",
    meaning: "To boast of your modest skill in front of a master",
    decoys: ["To threaten someone outside their house", "To practice woodworking diligently"]
  },
  {
    language: "Chinese (Mandarin)",
    original: "脚踏两只船 (Jiǎo tà liǎng zhī chuán)",
    literal: "“To step on two boats at once”",
    meaning: "To sit on the fence or date two people at the same time",
    decoys: ["To embark on a long journey by water", "To be an expert sailor"]
  },
  {
    language: "Korean",
    original: "식은 죽 먹기 (Sik-eun juk meok-gi)",
    literal: "“Eating cold rice porridge”",
    meaning: "A piece of cake / an extremely easy task",
    decoys: ["Eating a tasteless meal in silence", "Suffering a mild punishment"]
  },
  {
    language: "Korean",
    original: "발이 넓다 (Bal-i neolb-da)",
    literal: "“To have wide feet”",
    meaning: "To have a vast network of acquaintances and connections",
    decoys: ["To walk clumsily and trip often", "To travel long distances on foot"]
  },
  {
    language: "Korean",
    original: "귀가 얇다 (Gwi-ga yalb-da)",
    literal: "“To have thin ears”",
    meaning: "To be gullible and easily swayed by others' words",
    decoys: ["To be sensitive to high-pitched sounds", "To get cold easily in the wind"]
  },
  {
    language: "Korean",
    original: "배보다 배꼽이 더 크다 (Bae-boda baekkop-i deo keuda)",
    literal: "“The belly button is bigger than the stomach”",
    meaning: "The minor side expenses cost more than the main item itself",
    decoys: ["A person whose ambition outpaces their skill", "An optical illusion that tricks the eye"]
  },
  {
    language: "Korean",
    original: "간에 기별도 안 간다 (Gan-e gibyeol-do an ganda)",
    literal: "“It doesn't even send a message to the liver”",
    meaning: "The portion of food was far too small to satisfy hunger",
    decoys: ["The medicine had no effect on the patient", "A secret kept so well no one noticed"]
  },
  {
    language: "Tagalog",
    original: "Balat-sibuyas",
    literal: "“Onion-skinned”",
    meaning: "To be overly sensitive or easily offended by criticism",
    decoys: ["To cry at sad movies", "To have very pale skin"]
  },
  {
    language: "Tagalog",
    original: "Ningas-kugon",
    literal: "“Wild cogon grass fire”",
    meaning: "Starting a project with burning enthusiasm that quickly dies out",
    decoys: ["An argument that destroys friendships", "A summer heatwave that dries fields"]
  },
  {
    language: "Tagalog",
    original: "Naglulubid ng buhangin",
    literal: "“Twisting ropes out of sand”",
    meaning: "Telling obvious, unbelievable lies",
    decoys: ["Building castles on the beach", "Attempting impossible manual labor"]
  },
  {
    language: "Hindi",
    original: "दाल में कुछ काला है (Daal mein kuch kaala hai)",
    literal: "“There is something black in the lentils”",
    meaning: "Something is suspicious or fishy here",
    decoys: ["The dinner has been burnt", "An unexpected spice was added"]
  },
  {
    language: "Hindi",
    original: "अंगूठा दिखाना (Angootha dikhana)",
    literal: "“To show the thumb”",
    meaning: "To flatly refuse to help someone at the last minute",
    decoys: ["To give an encouraging thumbs up", "To hitchhike along the road"]
  },
  {
    language: "Hindi",
    original: "ऊंट के मुंह में जीरा (Oonth ke munh mein jeera)",
    literal: "“A single cumin seed in a camel's mouth”",
    meaning: "A tiny drop in the ocean / far too little to meet a large need",
    decoys: ["An unpleasant taste in food", "Feeding livestock carefully"]
  },
  {
    language: "Hindi",
    original: "हवा में महल बनाना (Hawa mein mahal banana)",
    literal: "“To build palaces in the air”",
    meaning: "To create unrealistic daydreams and castle-in-the-sky plans",
    decoys: ["To build skyscrapers on soft soil", "To boast about architectural skill"]
  },
  {
    language: "Arabic",
    original: "على راسي (Ala rasi)",
    literal: "“On my head”",
    meaning: "I would be honored to do this for you / at your service",
    decoys: ["I have a terrible headache", "You are blaming me for everything"]
  },
  {
    language: "Arabic",
    original: "يبيع المَيّة في حارة السقايين (Yibee' el-mayya fi haret el-saqqayeen)",
    literal: "“Selling water in the neighborhood of water-carriers”",
    meaning: "Trying to show off or sell something to seasoned experts who already have it",
    decoys: ["Starting a business in a prime location", "Quenching thirst during a heatwave"]
  },
  {
    language: "Arabic",
    original: "حَبّة حَبّة (Habba habba)",
    literal: "“Pill by pill / grain by grain”",
    meaning: "Step by step / take things slowly and patiently",
    decoys: ["Taking prescribed medication", "Counting harvested crops"]
  },
  {
    language: "Turkish",
    original: "Balık baştan kokar",
    literal: "“The fish stinks from the head first”",
    meaning: "Corruption or failure begins with the leadership at the top",
    decoys: ["Bad seafood causes food poisoning", "Poor hygiene is noticeable quickly"]
  },
  {
    language: "Turkish",
    original: "Pireyi deve yapmak",
    literal: "“To turn a flea into a camel”",
    meaning: "To exaggerate an insignificant issue into a giant crisis",
    decoys: ["To make a great fortune from small beginnings", "To trade a small animal for a large one"]
  },
  {
    language: "Turkish",
    original: "Kafayı üşütmek",
    literal: "“To catch a cold in one's head”",
    meaning: "To go crazy or lose one's mind",
    decoys: ["To get sick from walking outside without a hat", "To suffer a severe headache"]
  },
  {
    language: "Turkish",
    original: "Havadan sudan konuşmak",
    literal: "“To speak of the air and the water”",
    meaning: "To chat casually about trivial things / make small talk",
    decoys: ["To discuss weather forecasts", "To debate environmental issues"]
  },
  {
    language: "Hebrew",
    original: "לאכול סרטים (Le'echol sratim)",
    literal: "“To eat movies”",
    meaning: "To over-dramatize a situation or get worked up over nothing",
    decoys: ["To binge-watch cinema all weekend", "To eat too much popcorn at the theater"]
  },
  {
    language: "Hebrew",
    original: "לחיות בסרט (Lichyot b'seret)",
    literal: "“To live in a movie”",
    meaning: "To be detached from reality and live in a fantasy world",
    decoys: ["To be an aspiring Hollywood actor", "To experience an adventurous vacation"]
  },
  {
    language: "Hebrew",
    original: "על הפנים (Al ha-panim)",
    literal: "“On the face”",
    meaning: "Terrible, awful, or of very poor quality",
    decoys: ["Directly in plain sight", "Falling down while running"]
  },
  {
    language: "Persian (Farsi)",
    original: "موش بخوردت (Moosh bekhoradet)",
    literal: "“May a mouse eat you”",
    meaning: "An affectionate expression saying 'You are so adorable!'",
    decoys: ["A bitter curse wishing harm on an enemy", "A warning about pest infestations"]
  },
  {
    language: "Persian (Farsi)",
    original: "هندوانه زیر بغل کسی گذاشتن (Hendevaneh zir-e baghal-e kasi gozashtan)",
    literal: "“To put watermelons under someone's armpits”",
    meaning: "To flatter someone insincerely so they take on a hard task",
    decoys: ["To carry heavy groceries home", "To cool someone down on a hot day"]
  },
  {
    language: "Persian (Farsi)",
    original: "قربانت بروم (Ghorbanat beravam)",
    literal: "“May I become your sacrifice”",
    meaning: "A dramatic expression of profound gratitude or affection ('I adore you')",
    decoys: ["I surrender in our argument", "I will pay for your mistakes"]
  },
  {
    language: "Vietnamese",
    original: "Mèo mù vớ cá rán",
    literal: "“A blind cat stumbles upon a fried fish”",
    meaning: "A stroke of sheer, undeserved dumb luck",
    decoys: ["A hungry stray animal finds food", "A foolish mistake that ends badly"]
  },
  {
    language: "Vietnamese",
    original: "Nước đổ đầu vịt",
    literal: "“Water poured on a duck's head”",
    meaning: "Words or advice wasted on someone who ignores them completely",
    decoys: ["A refreshing splash on a hot afternoon", "Swimming effortlessly in a river"]
  },
  {
    language: "Thai",
    original: "ขี่ช้างจับตั๊กแตน (Khee chang jab takkatan)",
    literal: "“Riding an elephant to catch a grasshopper”",
    meaning: "Expending a massive amount of effort or money for a tiny result",
    decoys: ["Hunting pests in agricultural fields", "Going on an extravagant safari"]
  },
  {
    language: "Thai",
    original: "ไก่เห็นตีนงู งูเห็นนมไก่ (Kai hen teen ngu, ngu hen nom kai)",
    literal: "“The chicken sees the snake's feet, and the snake sees the chicken's breasts”",
    meaning: "Two deceitful people who know each other's hidden secrets",
    decoys: ["An impossible encounter in nature", "Two enemies who become close friends"]
  },
  {
    language: "Indonesian",
    original: "Malu-malu kucing",
    literal: "“Shy like a cat”",
    meaning: "Pretending to be shy or disinterested while secretly wanting something",
    decoys: ["Frightened of loud sudden noises", "Sneaking around the kitchen for food"]
  },
  {
    language: "Indonesian",
    original: "Ada udang di balik batu",
    literal: "“There is a shrimp behind the stone”",
    meaning: "There is a hidden, suspicious ulterior motive behind an action",
    decoys: ["Searching for seafood along the rocky coast", "A pleasant surprise waiting to be found"]
  },
  {
    language: "Swahili",
    original: "Asiyekujua hakuthamini",
    literal: "“He who does not know you does not value you”",
    meaning: "Don't take criticism to heart from people who don't truly know you",
    decoys: ["Strangers will never help you in an emergency", "First impressions determine your worth"]
  },
  {
    language: "Swahili",
    original: "Haraka haraka haina baraka",
    literal: "“Hurry hurry has no blessing”",
    meaning: "Haste makes waste / rushing through things leads to mistakes",
    decoys: ["Fast runners win the greatest rewards", "Lateness is considered a sign of disrespect"]
  },
  {
    language: "Yoruba",
    original: "Ile la ti n ko eso r'ode",
    literal: "“Charity begins within the house before taking it outside”",
    meaning: "Good character and manners must be learned and practiced at home first",
    decoys: ["Clean your porch before your guests arrive", "Do not invite strangers to family dinners"]
  },
  {
    language: "Hungarian",
    original: "Kutyából nem lesz szalonna",
    literal: "“You can't make bacon out of a dog”",
    meaning: "A leopard can't change its spots / a bad person rarely changes",
    decoys: ["Cheap ingredients make poor dishes", "Do not feed valuable food to pets"]
  },
  {
    language: "Hungarian",
    original: "Elsüllyed a föld alá szégyenében",
    literal: "“To sink under the earth from shame”",
    meaning: "To wish the ground would swallow you up from intense embarrassment",
    decoys: ["To bury a buried secret forever", "To hide underground during a storm"]
  }
];