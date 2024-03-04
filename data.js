const isLocalhost = !process.env.PORT; // Check if the PORT environment variable exists

const BASE_IMAGE_URL = isLocalhost 
  ? 'http://localhost:8080/assets/' // If running locally
  : 'https://dive-api-717e7547a56e.herokuapp.com/assets/'; // If running on Heroku, replace 'your-heroku-app-url' with your actual Heroku app URL

  export const fish = [
    {
      "id" : 1,
      "isFavorite": false,
      "name": "Tuna",
      "japanese_name": "Maguro (マグロ)",
      "description": "Tuna is a popular sushi fish known for its rich flavor and firm texture. It comes in different varieties such as bluefin, yellowfin, and albacore. Even though the generic term maguro covers several species, bluefin tuna species are preferred to the other species, especially in high-end restaurants. Bluefin tuna is called hon maguro (本鮪) in Japanese, which literally means “genuine” or “true tuna”.",
      "flavor_profile" : "The taste of maguro sushi or sashimi depends on the species of tuna and the part of the body from which the meat is taken. In general, the tuna meat is very tender and has an intense taste. Meat that comes from the center of the body is dark red, shiny and very lean, it is called akami (赤身) in Japanese. Akami has a fine sour taste which is accompanied by full-bodied umami aromas. The texture is velvet-like and firm without being tough. The fatty meat of maguro is known as toro (トロ), derived from torori (とろり) and symbolically describes the feeling of toro, which literally melts on the tongue. Toro is mainly located on the back and belly of the maguro body. It is exceptionally tender, very rich in fat, and has an intense, sweet buttery taste that is unmistakable.",
      "image_url": `${BASE_IMAGE_URL}maguro.jpeg`,
      "taste_profile": {
        "taste": "Rich",
        "texture": "Firm"
      },
      "origin": "Various regions worldwide",
      "sustainability": "Varies by species; some tuna species are overfished while others are sustainably harvested",
      "nutritional_information": {
        "calories_per_serving": 184,
        "protein": "29g",
        "fat": "6g",
        "carbohydrates": "0g"
      }
    },
    {
      "id" : 2,
      "isFavorite": false,
      "name": "Salmon",
      "japanese_name": "Sake (サケ)",
      "description": "Sake-rui (サケ類) is the Japanese generic term for fishes belonging to the family of salmonids. In a narrower sense, the Japanese term sake refers to the pacific salmons, especially to chuma salmon (shirosake, シロザケ), in a broader sense, the term refers to a category of salmon fish that bear the term sake in their name and whose meat is similar in color and texture to that of chum salmon. Traditionally, these fish have been classified as belonging to the sake group if they spend most of their lives in salt water. Only since modern times salmon is prepared as sushi to the extent we know it today. Traditionally, salmon was rarely used for the preparation of sushi or sashimi. Even though the term sake traditionally refers to Pacific salmons, today it is mainly the Atlantic salmon from aquaculture that is used.",
      "flavor_profile" : "The meat is greasy, extraordinarily tender and is accompanied by intense buttery flavors. The intensity and texture of sake meat differs between species and also whether they are farmed or wild.",
      "image_url": `${BASE_IMAGE_URL}sake.jpeg`,
      "taste_profile": {
        "taste": "Buttery",
        "texture": "Tender"
      },
      "origin": "Atlantic Ocean, Pacific Ocean",
      "sustainability": "Varies by region and farming practices; some wild-caught salmon populations are endangered, while sustainably farmed salmon is available.",
      "nutritional_information": {
        "calories_per_serving": 131,
        "protein": "22g",
        "fat": "5g",
        "carbohydrates": "0g"
      }
    },
    {
      "id" : 3,
      "isFavorite": false,
      "name": "Escolar",
      "japanese_name": "Aburasokomutsu (アブラソコムツすし)",
      "description": "Aburasokomutsu is the Japanese name for the escolar, which is sometimes referred to “butterfish” or incorrectly “white tuna”. Although occasionally referred to as a butterfish, the Escolar is not a member of the butterfish family, but a member of the snake mackerel family. Unlike in Japan, you can often find aburasokomutsu in the display (neta-bako, ネタ箱) of western sushi bars and restaurants. The name “butterfish” or “white tuna” originates from a purely commercial motivation and should sound more appealing to the consumer.",
      "flavor_profile" : "There is hardly any other fish that is better suited to the false name “butterfish” or “white toro” than the escolar. The shiny, matte white meat is firm, very tender, full-bodied and accompanied by aromas that have a strikingly strong taste of butter. Compared to tuna, the meat is slightly more sour and less fresh in taste.",
      "image_url": `${BASE_IMAGE_URL}escolar.avif`,
      "taste_profile": {
        "taste": "Buttery",
        "texture": "Tender"
      },
      "origin": "Atlantic Ocean, Pacific Ocean",
      "sustainability": "Varies by region and farming practices; some wild-caught salmon populations are endangered, while sustainably farmed salmon is available.",
      "nutritional_information": {
        "calories_per_serving": 131,
        "protein": "22g",
        "fat": "5g",
        "carbohydrates": "0g"
      }
    },
    {
      "id": 4,
      "isFavorite": false,
      "name": "Japanese Horse Mackerel",
      "japanese_name": "Aji (アジすし)",
      "description": "Japanese Horse Mackerel, also known as Aji, is a species of fish commonly found in the coastal waters of Japan and throughout the Pacific Ocean.",
      "flavor_profile" : "Aji has a distinctively rich flavor and oily texture, making it a popular choice in Japanese cuisine. Aji is often enjoyed grilled, fried, or served raw as sashimi or nigiri. It is prized for its delicate flavor and versatility in various dishes. Aji is one of the most important representatives of sushi ingredients prepared with the shiny silver skin (hikarimono). The meat of aji is pink and firm. It is also juicy, rich in fat and has a strong characteristic taste. Like other silver-skinned fish, ajj is particularly tasty after salting and marinating in vinegar (sujime-method, 酢じめ). Marinating not only preserves and absorbs strong flavours, but also serves to enrich aromas and reduce the “fishy” taste. Contrary to popular belief, soaking in a salt or vinegar solution does not sufficiently kill any parasites that may be present.",
      "image_url": `${BASE_IMAGE_URL}aji.jpeg`,
      "taste_profile": {
        "taste": "Rich",
        "texture": "Oily"
      },
      "origin": "Coastal waters of Japan, Pacific Ocean",
      "best_season": "Summer to autumn",
      "sustainability": "Aji populations are generally stable, but overfishing and environmental factors can impact their sustainability. It is essential to choose sustainably sourced Aji to support responsible fishing practices.",
      "nutritional_information": {
        "calories_per_serving": 130,
        "protein": "21g",
        "fat": "5g",
        "carbohydrates": "0g"
      }
    },
    {
      "id": 5,
      "isFavorite": false,
      "name": "Salt-water Eel",
      "japanese_name": "Anago (アナゴ)",
      "description": "Anago, also known as Conger eel, is a type of eel commonly found in the waters around Japan and other parts of Asia.",
      "flavor_profile" : "Anago is counted among the traditional representatives of the cooked sushi ingredients (nimono-dane). Therefore, prepared anago sushi is also often called ni-anago-sushi (煮穴子寿司). The broth that results from cooking the anago meat is boiled down, refined, and then used to glaze the meat. This tasty salty sweet sauce is called nitsume (煮詰め) and is an essential part of the taste experience when eating anago nigiri sushi. The meat is so soft that it almost falls apart and offers a full-bodied sweet taste. The texture is extremely pleasant and melts on the tongue. Anago harmonizes very well with vinegared sushi rice and is traditionally preferred over freshwater eel (unagi) for the preparation of sushi. In contrast to unagi, aanago is less greasy, sweeter and has a finer taste.",
      "image_url": `${BASE_IMAGE_URL}anago.jpeg`,
      "taste_profile": {
        "taste": "Delicate",
        "texture": "Tender"
      },
      "origin": "Waters around Japan, Asia",
      "best_season": "Summer",
      "sustainability": "Anago populations are currently stable, and many are sustainably harvested. However, overfishing and habitat destruction can threaten their sustainability. It is essential to choose Anago from reputable sources that support responsible fishing practices.",
      "nutritional_information": {
        "calories_per_serving": 200,
        "protein": "20g",
        "fat": "10g",
        "carbohydrates": "0g"
      },
    },
    {
      "id": 6,
      "isFavorite": false,
      "name": "Yellowtail",
      "japanese_name": "Hamachi (ハマチすし)",
      "description": "Hamachi is the Japanese term for a medium-sized japanese amberjack or yellowtail (buri). It is a species of jack fishes in the family of Jacks and pompanos. A hamachi is between 40 to 60 cm in size and thus corresponds to about half to three-quarters of a full-grown buri. Hamachi is a popular ingredient in Japanese cuisine and a popular ingredient for sushi and sashimi.",
      "flavor_profile": "The taste is full-bodied, minerally and slightly buttery with a distinct sweetness. The light-colored and whitish to pinkish red meat has a pleasant soft texture, is medium firm and thanks to the fat content remarkably tender. The meat of hamachi is equally suitable for nigiri sushi or sashimi.",
      "image_url": `${BASE_IMAGE_URL}hamachi.webp`,
      "taste_profile": {
        "taste": "Rich",
        "texture": "Buttery"
      },
      "origin": "Pacific and Indian Oceans",
      "best_season": "Autum to winter",
      "sustainability": "Yellowtail populations are generally stable, but overfishing and habitat degradation can impact their sustainability. It is important to choose sustainably sourced Yellowtail to support responsible fishing practices.",
      "nutritional_information": {
        "calories_per_serving": 232,
        "protein": "24g",
        "fat": "15g",
        "carbohydrates": "0g"
      },
    },
    {
      "id": 7,
      "isFavorite": false,
      "name": "Sea Bream",
      "japanese_name": "Tai (タイすし)",
      "description" : "Tai describes the family of the sea-breams in Japanese. In the culinary context, it often refers to the red seabream, which in Japan is called madai (マダイ) and literally means “true seabream“. With the rise of modern fishing, the number of sea bream with tai in their name has grown, with more than 140 species belonging to the sea bream family. Also some species of fish, which are not related to the sea bream, have tai in their name. According to Katsumi Suzuki (鈴木克美), professor at Tokai University of Ichthyology, 235 species have the term tai in their name.",
      "flavor_profile": "Tai is prized for its mild and slightly sweet flavor, firm texture, and delicate taste. Sea Bream is native to the waters around Japan and is often served raw as sashimi or nigiri, grilled, or simmered in a broth. It is a symbol of celebration and is commonly served at special occasions and festive gatherings.",
      "image_url": `${BASE_IMAGE_URL}tai.jpeg`,
      "taste_profile": {
        "taste": "Mild",
        "texture": "Firm"
      },
      "origin": "Waters around Japan",
      "best_season": "Year-round",
      "sustainability": "Sea Bream populations are generally stable, and many are sustainably harvested. However, overfishing and habitat destruction can threaten their sustainability. It is essential to choose Sea Bream from reputable sources that support responsible fishing practices.",
      "nutritional_information": {
        "calories_per_serving": 132,
        "protein": "18g",
        "fat": "6g",
        "carbohydrates": "0g"
      }
    },
    {
      "id": 8,
      "isFavorite": false,
      "name": "Shrimp",
      "japanese_name": "Ebi (エビ)",
      "description": "The term ebi in Japanese refers to two orders of decapods, namely shrimps and prawns. In Japan, ebi in a culinary context or as a sushi ingredient usually refers to the kuruma shrimp. There are also other species that play an important role in Japanese cuisine and sushi. Especially in Japan, ebi is considered one of the representative high-class ingredients for Edomae style sushi. Some refer to ebi as one of the “kings of sushi” because of its good taste and beautiful look.",
      "flavor_profile": "Shrimp is versatile and can be prepared in numerous ways, including boiled, grilled, fried, or served raw as sashimi. It is commonly used in sushi rolls, nigiri, tempura, and other traditional Japanese dishes.",
      "image_url": `${BASE_IMAGE_URL}ebi.avif`,
      "taste_profile": {
        "taste": "Sweet",
        "texture": "Delicate"
      },
      "origin": "Coastal regions worldwide",
      "best_season": "Varies by species and region",
      "sustainability": "Shrimp fisheries face sustainability challenges due to overfishing, habitat destruction, and bycatch issues. It is essential to choose sustainably sourced shrimp to support responsible fishing practices and protect marine ecosystems.",
      "nutritional_information": {
        "calories_per_serving": 84,
        "protein": "18g",
        "fat": "1g",
        "carbohydrates": "0g"
      }
    },
    {
      "id": 9,
      "isFavorite": false,
      "name": "Sweet Shrimp",
      "japanese_name": "Amaebi (甘エビ)",
      "description" : "Amaebi, or spot prawns, (colloquially known as sweet shrimp) are cold water northern shrimp known and named for their sweet taste. Amaebi are caught in their small, male state, as they are at the peak of sweetness early on in their life cycle. Because these sweet shrimp are so small, they are often served two at a time. The only time that it is best served cooked in Japanese cuisine is in their female form while bearing eggs, as the eggs lend a rich flavor to the dish.",
      "flavor_profile": "Amaebi is typically served raw as sushi, particularly as nigiri, to highlight its natural sweetness and delicate texture,and often accompanied by their fried shells and heads. It is often enjoyed as a seasonal delicacy during specific times of the year.",
      "image_url": `${BASE_IMAGE_URL}amaebi.avif`,
      "taste_profile": {
        "taste": "Sweet",
        "texture": "Succulent"
      },
      "origin": "Waters around Japan",
      "best_season": "Late spring to early summer",
      "sustainability": "Amaebi populations are generally stable, but overfishing and habitat degradation can impact their sustainability. It is essential to choose sustainably sourced Amaebi to support responsible fishing practices and ensure the long-term health of marine ecosystems.",
      "nutritional_information": {
        "calories_per_serving": 92,
        "protein": "20g",
        "fat": "1g",
        "carbohydrates": "0g"
      }
    },
    {
      "id": 10,
      "isFavorite": false,
      "name": "Mackerel",
      "japanese_name": "Saba (サバすし)",
      "description": "Saba is a general term for a group of fishes, belonging to the order mackerels. The predominant part of the fishes with saba in their name belongs to the tribe of “true mackerels”. Traditionally, the term refers to the chub mackerel which is referred to in Japanese as masaba (マサバ) meaning “true mackerel”. In the culinary context, the term “saba“ includes not only chub mackerel but also its relatives such as the Australian mackerel and Atlantic mackerel.",
      "flavor_profile": "Shime saba is very tasty and its aromas range from a refreshing acidity, a slightly sweetish fish taste to salt and minerals. The texture of the meat is pleasantly soft and fluffy, so that it falls apart easily on the tongue. Chopped spring onions, grated fresh ginger or grated winter radish (daikon) are very suitable as a garnish or topping.",
      "image_url": `${BASE_IMAGE_URL}saba.jpeg`,
      "taste_profile": {
        "taste": "Rich",
        "texture": "Firm"
      },
      "origin": "Temperate and tropical waters worldwide",
      "best_season": "Varies by species and region",
      "sustainability": "Mackerel populations are generally stable, but overfishing and environmental factors can impact their sustainability. It is essential to choose sustainably sourced Mackerel to support responsible fishing practices and ensure the long-term health of marine ecosystems.",
      "nutritional_information": {
        "calories_per_serving": 184,
        "protein": "19g",
        "fat": "12g",
        "carbohydrates": "0g"
      }
    },
    {
      "id": 11,
      "isFavorite": false,
      "name": "Octopus",
      "japanese_name": "Tako (タコすし)",
      "description": "Octopus, known as Tako in Japanese, is a marine mollusk with eight arms and a distinctively chewy texture. It is a common ingredient in various cuisines worldwide, including Japanese cuisine.",
      "flavor_profile": "Tako is typically served cooked, either boiled, grilled, or simmered, to tenderize its tough flesh. It is a versatile ingredient and is enjoyed in dishes such as sushi, sashimi, takoyaki (octopus balls), and sunomono (octopus salad).",
      "image_url": `${BASE_IMAGE_URL}tako.avif`,
      "taste_profile": {
        "taste": "Mild",
        "texture": "Chewy"
      },
      "origin": "Worldwide, primarily in oceanic waters",
      "best_season": "Varies by region",
      "sustainability": "Octopus populations are generally abundant and resilient to fishing pressure. However, certain species and populations may be at risk due to overfishing and habitat destruction. It is essential to choose sustainably sourced Octopus and support responsible fishing practices to ensure their long-term survival.",
      "nutritional_information": {
        "calories_per_serving": 82,
        "protein": "15g",
        "fat": "1g",
        "carbohydrates": "3g"
      }
    },
    {
      "id": 12,
      "isFavorite": false,
      "name": "Squid",
      "japanese_name": "Ika (イカすし)",
      "description": "Squid, known as Ika in Japanese, includes a large number of possible species, is a cephalopod mollusk with a soft, cylindrical body and ten tentacles. More than 300 species are counted among the ika.",
      "flavor_profile": "Ika is a versatile ingredient in Japanese cuisine and is enjoyed for its mild flavor and tender texture. Ika can be prepared in various ways, including raw as sashimi or sushi, grilled, fried, or simmered in soups and stews. It is prized for its delicate taste and ability to absorb flavors.",
      "image_url": `${BASE_IMAGE_URL}ika.avif`,
      "taste_profile": {
        "taste": "Mild",
        "texture": "Tender"
      },
      "origin": "Worldwide, primarily in oceanic waters",
      "best_season": "Varies by region",
      "sustainability": "Squid populations are generally abundant and resilient to fishing pressure. However, certain species and populations may be at risk due to overfishing and habitat destruction. It is essential to choose sustainably sourced Squid and support responsible fishing practices to ensure their long-term survival.",
      "nutritional_information": {
        "calories_per_serving": 92,
        "protein": "18g",
        "fat": "1g",
        "carbohydrates": "3g"
      }
    },
    {
      "id": 13,
      "isFavorite": false,
      "name": "Freshwater Eel",
      "japanese_name": "Unagi (ウナギすし)",
      "description": "Unagi (ウナギ) is the Japanese word for the genus of freshwater eels and traditionally refers to the Japanese eel (nihon unagi). Unagi is a very popular ingredient in Japanese cuisine and is considered one of the most expensive food fish in Japan. Freshwater eel is not considered a classic sushi ingredient. However, nowadays it is regularly encountered as sushi, especially outside Japan.",
      "flavor_profile": "Unagi is often grilled and glazed with a sweet and savory sauce made from soy sauce, mirin, and sugar. It is a popular choice for sushi, particularly as nigiri, and is also enjoyed in other dishes such as unadon (grilled eel over rice) and kabayaki (grilled eel skewers).",
      "image_url": `${BASE_IMAGE_URL}unagi.webp`,
      "taste_profile": {
        "taste": "Rich",
        "texture": "Tender"
      },
      "origin": "Freshwater rivers and lakes",
      "best_season": "Summer",
      "sustainability": "Freshwater Eel populations are declining due to overfishing, habitat loss, and pollution. It is crucial to choose sustainably sourced Freshwater Eel and support conservation efforts to protect their populations.",
      "nutritional_information": {
        "calories_per_serving": 232,
        "protein": "20g",
        "fat": "15g",
        "carbohydrates": "0g"
      },
    },
    {
      "id": 14,
      "isFavorite": false,
      "name": "Salmon Caviar",
      "japanese_name": "Ikura (イクラすし)",
      "description": "Ikura (イクラ) is a Japanese loanword for ikra (икра), the Russian word for the eggs or the roe of the fishes. The Japanese term Ikura refers in a narrow sense to the single eggs of salmon, but in a broader sense also includes that of trout. It is prized for its vibrant color, delicate texture, and burst of briny flavor.",
      "flavor_profile": "Ikura is commonly served as a topping for sushi, particularly nigiri, or as a garnish for various dishes. It is often marinated in a mixture of soy sauce and mirin to enhance its flavor and add a subtle sweetness. Ikura adds a luxurious and flavorful element to sushi and is a popular choice among seafood enthusiasts.",
      "image_url": `${BASE_IMAGE_URL}ikura.jpeg`,
      "taste_profile": {
        "taste": "Briny",
        "texture": "Delicate"
      },
      "origin": "Salmon",
      "best_season": "Varies by salmon spawning season",
      "sustainability": "Salmon populations face conservation concerns due to overfishing, habitat destruction, and environmental pollution. It is essential to choose sustainably sourced Salmon Roe and support conservation efforts to protect salmon populations and their habitats.",
      "nutritional_information": {
        "calories_per_serving": 40,
        "protein": "4g",
        "fat": "2g",
        "carbohydrates": "1g"
      }
    },
    {
      "id": 15,
      "isFavorite": false,
      "name": "Capelin Roe",
      "japanese_name": "Masago (マサゴすし)",
      "description" : "Masago or shishamo-ko is the original or actual Japanese name for the roe of shishamo, a fish species belonging to the smelt family. Masago is mainly known as an ingredient for sushi, in which it, usually brightly colored, adds a strikingly colorful note to many contemporary sushi dishes. In addition, masago is a frequently used garnish in Japan for many types of rice, noodle and salad dishes.",
      "flavor_profile": "Masago is commonly used as a sushi topping and is prized for its mild flavor, crunchy texture, and vibrant color. Masago is often used as a garnish for sushi rolls, particularly in maki (rolled) sushi, to add both visual appeal and a burst of flavor. It is also used in various other dishes and as a component in seafood salads and appetizers.",
      "image_url": `${BASE_IMAGE_URL}masago.avif`,
      "taste_profile": {
        "taste": "Mild",
        "texture": "Crunchy"
      },
      "origin": "Capelin fish",
      "best_season": "Varies",
      "sustainability": "Capelin populations are generally abundant and resilient to fishing pressure. However, it is essential to choose sustainably sourced Capelin Roe to support responsible fishing practices and ensure the long-term health of marine ecosystems.",
      "nutritional_information": {
        "calories_per_serving": 40,
        "protein": "4g",
        "fat": "2g",
        "carbohydrates": "1g"
      }
    },
    {
      "id": 16,
      "isFavorite": false,
      "name": "Sea Urchin",
      "japanese_name": "Uni (ウニすし)",
      "description": "Uni represents in Japanese the class of sea-urchins which belong to the Echinoderms. Worldwide there are up to a thousand species, but only a small part of them is valued as food. The gonads (reproductive glands of the uni, also occasionally referred to as roe, are considered a delicacy in Japan and many other regions of the world. Gonads are the sexual organs in which sex hormones and germ cells are produced. In a female animal these are the ovaries and in a male animal the testicles. The uni gonads are considered one of the most popular sushi ingredients in Japan.",
      "flavor_profile": "The raw gonads of the uni have an unmistakable taste. The exceptionally full-bodied umami taste is accompanied by mineral, sweet and slightly salty aromas reminiscent of the sea. The texture is extremely soft and literally melts on the tongue. Although uni can be eaten wonderfully on its own, it also tastes very well in combination with normal or vinegared rice. The most important factor for the good taste is freshness.",
      "image_url": `${BASE_IMAGE_URL}uni.jpeg`,
      "taste_profile": {
        "taste": "Briny",
        "texture": "Creamy"
      },
      "origin": "Sea Urchin",
      "best_season": "Varies",
      "sustainability": "Sea Urchin populations face conservation concerns due to overfishing and habitat degradation. It is essential to choose sustainably sourced Sea Urchin and support conservation efforts to protect their populations and marine ecosystems.",
      "nutritional_information": {
        "calories_per_serving": 70,
        "protein": "12g",
        "fat": "3g",
        "carbohydrates": "5g"
      }
    },
    {
      "id": 17,
      "isFavorite": false,
      "name": "Sweet Omelette",
      "japanese_name": "Tamago (卵)",
      "description" : "Tamagoyaki, which literally means grilled egg, (and is also called “dashimaki”) is essentially a Japanese rolled omelette made by folding over the egg many times as it cooks, forming a series of thin layers. Slightly sweet, with an impressively different texture due to the multiple layers, tamagoyaki is not just an unusual item in the sushi continuum, but a testament to the quality of a restaurant.",
      "flavor_profile": "Tamago is made from a mixture of eggs, sugar, and sometimes soy sauce or mirin. Tamago is typically cooked in a rectangular pan and then rolled into a thin, layered omelette. It is a popular component of sushi, especially in nigiri sushi, where it is often served as a topping or garnish. Tamago adds a sweet and comforting element to sushi and is enjoyed by both adults and children.",
      "image_url": `${BASE_IMAGE_URL}tamago.jpeg`,
      "taste_profile": {
        "taste": "Sweet",
        "texture": "Fluffy"
      },
      "origin": "Japan",
      "best_season": "Year-round",
      "sustainability": "N/A",
      "nutritional_information": {
        "calories_per_serving": 80,
        "protein": "6g",
        "fat": "5g",
        "carbohydrates": "3g"
      }
    },
    {
      "id": 18,
      "isFavorite": false,
      "name": "Scallop",
      "japanese_name": "Kaibashira (貝柱)",
      "description": "Scallop, known as Kaibashira, is a type of shellfish with a sweet and delicate flavor. It is highly prized in Japanese cuisine for its tender texture and briny taste. Scallops belong to the family Pectinidae and are bivalve mollusks, meaning they have two hinged shells, and the meat is typically harvested from the adductor muscle.",
      "flavor_profile": "Kaibashira is known for it's delicate taste, with a hint of sweetness, and a mild oceanic essence. The texture of scallops is tender and succulent, often described as buttery or melt-in-your-mouth. When served raw, as in sushi or sashimi, scallops offer a refreshing and clean taste with a slight chewiness. ",
      "image_url": `${BASE_IMAGE_URL}kaibashira.jpeg`,
      "taste_profile": {
        "taste": "Sweet",
        "texture": "Tender"
      },
      "origin": "Worldwide, primarily in oceanic waters",
      "best_season": "Varies by region",
      "sustainability": "Scallop populations are generally abundant and sustainably managed in many regions. However, overfishing and habitat destruction can threaten their sustainability in certain areas. It is essential to choose sustainably sourced scallops and support responsible fishing practices to protect scallop populations and marine ecosystems.",
      "nutritional_information": {
        "calories_per_serving": 80,
        "protein": "14g",
        "fat": "1g",
        "carbohydrates": "4g"
      }
    },
    {
      "id": 19,
      "isFavorite": false,
      "name": "Flounder",
      "japanese_name": "Hirame (ヒラメすし)",
      "description": "Hirame is the Japanese name for the olive flounder or bastard halibut, the term is also used as a collective term for species of related lefteye flounders that belong to the group of flatfishes (karei-me, カレイ目). Hirame is highly appreciated as an ingredient, especially for the preparation of sushi or sashimi. Wild-caught prime specimens regularly fetch high prices.",
      "flavor_profile": "The firm and very bright meat of hirame is a perfect for sushi and sashimi. The taste of hirame is mild and delicate, its texture is elastic and firm. The meat appears light white to slightly pink. Depending on the part of the fish from which the meat is taken, it may have pink shades, greyish layers or pronounced veins.",
      "image_url": `${BASE_IMAGE_URL}hirame.jpeg`,
      "taste_profile": {
        "taste": "Mild",
        "texture": "Delicate"
      },
      "origin": "Worldwide, primarily in temperate and subarctic waters",
      "best_season": "Varies by region",
      "sustainability": "Flounder populations face sustainability challenges due to overfishing and habitat degradation. It is essential to choose sustainably sourced Flounder and support responsible fishing practices to ensure their long-term survival.",
      "nutritional_information": {
        "calories_per_serving": 70,
        "protein": "15g",
        "fat": "1g",
        "carbohydrates": "0g"
      }
    },
    {
      "id": 20,
      "isFavorite": false,
      "name": "Monkfish Liver",
      "japanese_name": "Ankimo (アンキモすし)",
      "description": "Ankimo (あん肝) is a Japanese dish prepared from the liver (kimo, 肝) of a monkfish or anglerfish (ankou, 鮟鱇). It is also known as umi no foagura (海のフォアグラ) and is a delicacy that is very much sought-after in Japan. Ankimo is served as a starter in upscale restaurants that serve traditional Japanese food (washoku), Japanese multi-course haute cuisine (kaiseki ryori) or sushi. For the preparation, the blackmouth angler (ankou, アンコウ) and yellow goosefish (hon ankou, ホナンコウ), which are native to Japan, are preferred. More and more, their European and American relatives are also appearing in Japanese kitchens.",
      "flavor_profile": "Ankimo is often compared to foie gras for its smooth and velvety consistency, but with a more subtle and briny taste. It is typically served chilled and sliced thinly, accompanied by condiments such as ponzu sauce, grated daikon radish, or green onions.",
      "image_url": `${BASE_IMAGE_URL}ankimo.jpeg`,
      "taste_profile": {
        "taste": "Rich",
        "texture": "Creamy"
      },
      "origin": "Monkfish",
      "best_season": "Varies",
      "sustainability": "Monkfish populations face sustainability concerns due to overfishing and habitat destruction. It is essential to choose sustainably sourced Monkfish Liver and support responsible fishing practices to protect monkfish populations and marine ecosystems.",
      "nutritional_information": {
        "calories_per_serving": 110,
        "protein": "10g",
        "fat": "7g",
        "carbohydrates": "1g"
      }
    }
  ]