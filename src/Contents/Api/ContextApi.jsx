import React from "react";
import { createContext, useState } from "react";


export const ContextData = createContext();

export const ContextApi = (props) => {
    const [data, setData] = useState([

        // Bollywood
        {    
          id: 1,
          category: "bollywood",
          img: "https://upload.wikimedia.org/wikipedia/en/8/80/Dilwale_Dulhania_Le_Jayenge_poster.jpg",
          title: "Dilwale Dulhania Le Jayenge",
          para: "Yashvardhan Raichand is a snobbish man, he breaks ties with his elder son Rahul, for marrying a girl with lower social status. When his younger son Rohan returns home, he is upset to know that his brother no longer lives with them. Rohan decides to reunite his family and goes to London and finds Rahul. But, the question is will he be successful in convincing his egoistic father for a reunion?",
          year: "14 December 2001",
          
        },
        {    
          id: 2,
          category: "bollywood",
          img: "https://upload.wikimedia.org/wikipedia/en/b/b6/Lagaan.jpg",
          title: "Lagaan",
          para: "Yashvardhan Raichand is a snobbish man, he breaks ties with his elder son Rahul, for marrying a girl with lower social status. When his younger son Rohan returns home, he is upset to know that his brother no longer lives with them. Rohan decides to reunite his family and goes to London and finds Rahul. But, the question is will he be successful in convincing his egoistic father for a reunion?",
          year: "14 December 2001",
        },
        {    
          id: 3,
          category: "bollywood",
          img: "https://upload.wikimedia.org/wikipedia/en/d/db/Dil_Chahta_Hai.jpg",
          title: " Dil Chahta Hai",
          para: "Yashvardhan Raichand is a snobbish man, he breaks ties with his elder son Rahul, for marrying a girl with lower social status. When his younger son Rohan returns home, he is upset to know that his brother no longer lives with them. Rohan decides to reunite his family and goes to London and finds Rahul. But, the question is will he be successful in convincing his egoistic father for a reunion?",
          year: "14 December 2001",
        },
        {    
          id: 4,
          category: "bollywood",
          img: "https://upload.wikimedia.org/wikipedia/en/6/6a/Gangs_of_Wasseypur_poster.jpg",
          title: "Gangs of Wasseypur",
          para: "Yashvardhan Raichand is a snobbish man, he breaks ties with his elder son Rahul, for marrying a girl with lower social status. When his younger son Rohan returns home, he is upset to know that his brother no longer lives with them. Rohan decides to reunite his family and goes to London and finds Rahul. But, the question is will he be successful in convincing his egoistic father for a reunion?",
          year: "14 December 2001",
        },
        {    
          id: 5,
          category: "bollywood",
          img: "https://upload.wikimedia.org/wikipedia/en/0/08/Rang_De_Basanti_poster.jpg",
          title: "Rang De Basanti",
          para: "Shot primarily in New Delhi, Rang De Basanti was released globally on 20 January 2006. Upon release, the film broke all opening box office records in India",
          year: "20 January 2006",
        },
        {    
          id: 6,
          category: "bollywood",
          img: "https://upload.wikimedia.org/wikipedia/en/1/17/Zindagi_Na_Milegi_Dobara.jpg",
          title: "Zindagi Na Milegi Dobara",
          para: "The film's story follows three childhood friends, Arjun, Kabir, and Imran, who reunite for a three-week road trip. They set off to Spain and meet Laila, who falls in love with Arjun and helps him overcome his compulsion to work.",
          year: "15 July 2011",
        },
        {    
          id: 7,
          category: "bollywood",
          img: "https://upload.wikimedia.org/wikipedia/en/4/45/QueenMoviePoster7thMarch.jpg",
          title: "Queen",
          para: "Yashvardhan Raichand is a snobbish man, he breaks ties with his elder son Rahul, for marrying a girl with lower social status. When his younger son Rohan returns home, he is upset to know that his brother no longer lives with them. Rohan decides to reunite his family and goes to London and finds Rahul. But, the question is will he be successful in convincing his egoistic father for a reunion?",
          year: "14 December 2001",
        },
        {    
          id: 8,
          category: "bollywood",
          img: "https://upload.wikimedia.org/wikipedia/en/4/42/Bhaag_Milkha_Bhaag_poster.jpg",
          title: "Bhaag Milkha Bhaag",
          para: "Bhaag Milkha Bhaag was inspired by The Race of My Life,[9] an autobiography co-written by Singh and his daughter, Sonia Sanwalka.[10][11][12] Singh sold the film rights for one rupee and inserted a clause stating that a share of the profits would be given to the Milkha Singh Charitable Trust",
          year: "22 July 2013",
        },
        {    
          id: 9,
          category: "bollywood",
          img: "https://upload.wikimedia.org/wikipedia/en/1/13/Dhoom_2_%282006_film%29_poster.jpg",
          title: "Dhoom 2",
          para: "Dhoom 2 premiered on 24 November 2006 in India, where it received the widest release in Indian cinema history with over 1800 prints, and grossed over ₹1.5 billion, and was declared a blockbuster by Box Office India.",
          year: "24 November 2006",
        },
        {    
          id: 10,
          category: "bollywood",
          img: "https://upload.wikimedia.org/wikipedia/en/9/9f/Jab_We_Met_Poster.jpg",
          title: "Jab We Met",
          para: "The film fetched several awards, among which was a National Film Award for Best Female Playback Singer awarded to Shreya Ghoshal for the song Yeh Ishq Haaye, which remained a chartbuster for many weeks",
          year: "	25 October 2007",
        },
        {    
            id: 11,
            category: "bollywood",
            img: "https://m.media-amazon.com/images/M/MV5BOTQ5Nzc3NzAtMzZlMS00ZWJjLWIxMGMtNDU4ZTQ1NmNjMjc5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
            title: "KABHI KHUSHI KABHIE GHAM",
            para: "Yashvardhan Raichand is a snobbish man, he breaks ties with his elder son Rahul, for marrying a girl with lower social status. When his younger son Rohan returns home, he is upset to know that his brother no longer lives with them. Rohan decides to reunite his family and goes to London and finds Rahul. But, the question is will he be successful in convincing his egoistic father for a reunion?",
            year: "14 December 2001",
          },
          {
            id: 12,
            category: "bollywood",
            img: "https://upload.wikimedia.org/wikipedia/en/9/95/Krrish_poster.jpg",
            title: "KRRISH",
            para: "Krrish is the story of a simple village boy Krishna (Hrithik Roshan) who lives with his grandmother (Rekha) having lost his parents to misfortune. Krishna meets Priya (Priyanka Chopra) when she comes with her group for a trek from Singapore. Having fallen in love with her, he rushes to Singapore on being called by Priya who is trying to save her job by getting Krishna to Singapore and having him pull unnaturally jaw-dropping stunts - something he does regularly in his village. But when he reaches Singapore, the biggest truth of his life uncovers itself, transforming him into ``Krrish``, a gallany superhero. What is it that alters his life to an extent as this?",
            year: "23 June 2006",
          },
          {
            id: 13,
            category: "bollywood",
            img: "https://upload.wikimedia.org/wikipedia/en/9/90/Bang_Bang_%282014_Film%29.jpg",
            title: "BANG BANG",
            para: "A young bank receptionist gets mixed up with Rajveer Nanda, a man who has a mysterious background.",
            year: "2 October 2014",
          },
          {
            id: 14,
            category: "bollywood",
            img: "https://m.media-amazon.com/images/M/MV5BYmRiMmZmZGMtNjFhNi00MTIwLTlkNjQtNGM4ZTEzOWFmZmIwXkEyXkFqcGdeQXVyNTkzNDQ4ODc@._V1_FMjpg_UX1000_.jpg",
            title: "MUJHE DOSTHI KAROGE",
            para: '"What would you do if the one you loved was not actually the one you loved. What would you do if your best friend was in love with the one you love. What would you do if your best friends are sacrificing their love for you. Meet Raj (Hrithik Roshan), Pooja (Rani Mukerji) and Tina (Kareena Kapoor)- 3 best friends thrown into a situation that time, letters, love and separation have created for th',
            year: "9 August 2002",
          },
          {
            id: 15,
            category: "bollywood",
            img: "https://s3images.zee5.com/wp-content/uploads/sites/7/2022/01/Untitled-design-2022-01-26T151639.382.jpg",
            title: "AGNEEPATH",
            para: "A young boys father is lynched before his eyes fifteen years later he returns home for revenge.",
            year: "26 January 2012",
          },
          {
            id: 16,
            category: "bollywood",
            img: "https://pbs.twimg.com/media/Fd1D0-KaEAMU3Im?format=jpg&name=900x900",
            title: "VIKRAM VEDHA",
            para: "A tough police officer sets out to track down and kill an equally tough gangsters.",
            year: "30 September 2022",
          },
          {
            id: 17,
            category: "bollywood",
            img: "https://cdn.shopify.com/s/files/1/0969/9128/products/Pathan-ShahRukhKhan-BollywoodSuperhitHindiMoviePoster_ce29dea2-91e6-43b6-81cc-1e2e0a1c1ae0.jpg?v=1675251704",
            title: "Pathan",
            para: "Indian RAW agent Pathaan (Shah Rukh Khan) gets to know of a major impending attack against India, mounted by a mercenary group led by the ruthless enigma Jim (John Abraham), who has a history of his own.",
            year: "25 January 2023",
          },
          {
            id: 18,
            category: "bollywood",
            img: "https://w0.peakpx.com/wallpaper/712/382/HD-wallpaper-movie-war-2019-hrithik-roshan-tiger-shroff.jpg",
            title: "War",
            para: "An Indian soldier is assigned to eliminate his former mentor and he must keep his wits about him if he is to be successful in his mission; when the two men collide, it results in a barrage of battles and bullets.",
            year: "2 October 2019",
          },
          {
            id: 19,
            category: "bollywood",
            img: "https://www.kerala9.com/wp-content/uploads/2022/04/kgf-chapter-2-rocky-hd-images-001.jpg",
            title: "KGF",
            para: "Rocky, a young man, seeks power and wealth in order to fulfil a promise to his dying mother. His quest takes him to Mumbai, where he becomes involved with the notorious gold mafia.",
            year: "20 December 2018 ",
          },

        //   Fitness
          { 
            id: 20,
            category: "fitness",
            img:'https://media1.popsugar-assets.com/files/thumbor/VAPe-sKElq1UEu9dg6UKo45UJtM/104x208:3315x3419/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/12/30/943/n/1922729/f2e892315e0a6e7e776859.71445957_/i/yoga-poses-to-get-strong-for-headstand.jpg',
            title:"HEAD STAND",
            para:"Headstand improves body awareness, circulation, and posture. It can help reduce swelling in your ankles and feet, boost energy, fight fatigue, and build confidence."
          },
          {
            id: 21,
            category: "fitness",
            img:'https://www.yogajournal.com/wp-content/uploads/2022/01/Forearm-Plank_Andrew-Clark.jpg',
            title:'ELBOW PLANK',
            para:'Plank pose is most commonly used as a transitional pose, moving the body from high to lower planes, and vice versa. It is used within the sun salutation (surya namaskara) sequences and vinyasa sequences, as the yogi steps back to plank and lowers into chatturanga. Plank pose is also known as a pose in its own right, and is often held for long periods of time to build strength, heat, and energy in the body. Because plank pose requires a certain extent of strength and endurance, it is an ideal pose to refocus and re-energize, and overcome from sluggish energy or ‘stuck’ emotions.'
          },
          {
            id: 22,
            category: "fitness",
            img:'https://global-uploads.webflow.com/5fe33d036237252135e3e74d/630cbacb4c81fd7eeb81e0cb_Chakrasana%20by%20cult.fit.webp',
            title:'CHAKRASANA POSE',
            para:'Chakrasana is a deep back-bending pose that is performed for spinal flexibility. The word Chakrasana comes from the words ‘chakra’ meaning wheel and ‘asana’ meaning posture. It is also known as Urdhva Dhanurasana, Bridge Pose, or the Full Wheel Pose, and is an advanced level pose. Chakrasana pose gets its name from the semi-circular position that your body assumes while performing this asana- that of a wheel.The Chakrasana yoga pose stretches the muscles in your chest, shoulders, hamstrings, spinal extensors, and hip flexors. '
          },
          {
            id: 23,
            category: "fitness",
            img:'https://www.artofliving.org/sites/www.artofliving.org/files/styles/facebook_thumb/public/unity2/blog_image/woman%20performing%20bow%20pose.jpeg?itok=qcH0TMLI',
            title:'DHANURASANA POSE',
            para:'Bow Pose (Dhanurasana) is an intermediate yoga pose similar to a backbend. It’s one of the 12 basic Hatha Yoga poses. By lifting your torso up and backward, the chest is opened and the back is deeply stretched. This pose is a great way to deeply stretch the back after a long day of hunching over.'
          },
          {
            id: 24,
            category: "fitness",
            img:'https://upload.wikimedia.org/wikipedia/commons/5/57/Downward-Facing-Dog.JPG',
            title:'Adho Mukha Shvanasana',
            para:'Downward Dog stretches the hamstring and calf muscles in the backs of the legs, and builds strength in the shoulders. Some popular sites have advised against it during pregnancy, but an experimental study of pregnant women found it beneficial.'
          },
          {
            id: 25,
            category: "fitness",
            img:'https://upload.wikimedia.org/wikipedia/commons/d/d1/AcroDanceHandstand.jpg',
            title:'Adho Mukha Vrikshasana[',
            para:'A handstand is the act of supporting the body in a stable, inverted vertical position by balancing on the hands. In a basic handstand, the body is held straight with arms and legs fully extended, with hands spaced approximately shoulder-width apart and the legs together. There are many variations of handstands, all of which require the performer to possess adequate balance and upper body strength.'
          },
          {
            id: 26,
            category: "fitness",
            img:'https://upload.wikimedia.org/wikipedia/commons/1/11/Akarna_Dhanurasana.jpg',
            title:'Akarna Dhanurasana',
            para:'Akarna Dhanurasana involves pulling the foot towards the ear from a seated position with the legs outstretched.'
          },
          {
            id: 27,
            category: "fitness",
            img:'https://upload.wikimedia.org/wikipedia/commons/6/6d/Anantasana_wfs.jpg',
            title:'Anantasana',
            para:'Anantasana is entered from a lying position. The head is supported with one hand, the upper arm on the ground on that side; the other hand and leg are stretched straight up, the fingers grasping the big toe of the raised foot. The supporting arm, body, and lower leg are in a straight line.'
          },
          {
            id: 28,
            category: "fitness",
            img:'https://upload.wikimedia.org/wikipedia/commons/5/5c/J%C3%B3ga_Anjaneyasana.jpg',
            title:'Anjaneyasana',
            para:'Parivritta Anjaneyasana, a preparatory pose for Parivritta Parsvakonasana (where the rear knee is off the floor),[6] is the rotated form of the pose. This has the opposite elbow to the bent forward knee, and the rear knee on the floor.'
          },
          {
            id: 29,
            category: "fitness",
            img:'https://upload.wikimedia.org/wikipedia/commons/a/a6/Ardha_Chandrasana.jpg',
            title:'Ardha Chandrasana',
            para:'Parivrtta Ardha Chandrasana (Revolved Half Moon Pose) has the body revolved towards the standing leg.'
          },
          {
            id: 30,
            category: "fitness",
            img:'https://upload.wikimedia.org/wikipedia/commons/d/d8/Ashtanga_Namaskara_%28cropped%29.JPG',
            title:'Ashtanga Namaskara',
            para:'Ashtanga Namaskara is a prone posture with eight parts of the body in contact with the ground: both feet, both knees, both hands, the chest, and either the chin[7] or the forehead.[8] The hands are below the shoulders, the elbows bent.'
          },
          {
            id: 31,
            category: "fitness",
            img:'https://upload.wikimedia.org/wikipedia/commons/1/13/Astavakrasana.jpg',
            title:'Astavakrasana',
            para:'The pose is unknown in hatha yoga until the 20th century Light on Yoga, but the pose appears in the 1896 Vyayama Dipika, a manual of gymnastics, so Norman Sjoman suggests that it is one of the poses adopted into modern yoga in Mysore by Krishnamacharya. The pose would then have been taken up by his pupils Pattabhi Jois and B. K. S. Iyengar.'
          },
          {
            id: 32,
            category: "fitness",
            img:'https://upload.wikimedia.org/wikipedia/commons/c/cb/Bakasana1.JPG',
            title:'Bakasana',
            para:'In all variations, these are arm balancing poses in which hands are planted on the floor, shins rest upon upper arms, and feet lift up. The poses are often confused, but traditionally Kakasana has arms bent, Bakasana (the crane being the taller bird with longer legs) has the arms straight.'
          },
          {
            id: 33,
            category: "fitness",
            img:'https://upload.wikimedia.org/wikipedia/commons/0/0b/Balasana.JPG',
            title:'Balasana',
            para:'Ananda Balasana or "Happy Baby Pose" is an inverted form of Childs Pose it has the body on the back the thighs alongside the body, the knees bent and the hands grasping the toes.'
          },
          {
            id: 34,
            category: "fitness",
            img:'https://upload.wikimedia.org/wikipedia/commons/f/fc/Bharadvajasana1_%28cropped%29.JPG',
            title:'Bharadvajasana',
            para:'A different asana is illustrated under the name Bharadvajasana in the 19th century Sritattvanidhi; it somewhat resembles Mayurasana with the legs in Padmasana, but as drawn it would be impossible to perform.'
          },
          {
            id: 35,
            category: "fitness",
            img:'https://upload.wikimedia.org/wikipedia/commons/c/c9/Bhekasana1.JPG',
            title:'Bhekasana',
            para:"The pose is entered from a prone position. The arms reach back, the knees are bent and the hands catch the feet, pressing them down. The arms are reversed so that the elbows point upwards and the fingertips downwards. The head and chest are lifted, and the gaze is directed upwards. In the completed pose, the feet reach the floor."
          },

        //   Food
         
          {
            id: 40,
            category: "food",
            img: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Chicken_makhani.jpg',
            title: "Butter chicken",
            description: 'In 1975, the English phrase "butter chicken" curry first appeared in print, as a specialty of the house at Gaylord Indian restaurant in Manhattan.',
          },
          {
            id: 41,
            category: "food",
            img: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Chicken_Dry_Curry_-_Howrah_2015-04-26_8515.JPG',
            title: 'Chicken kasha is a dry chicken curry from Bengal',
            description: 'The Chicken Dry Curry (bn: Chicken Kasha) is a home-cooked preparation by Subrata Ganguly at her residence. Photographed in Howrah, West Bengal.',
          },

          {
            id: 41,
            category: "food",
            img: 'https://upload.wikimedia.org/wikipedia/commons/8/80/Bengali_Mutton_Curry.JPG',
            title: 'Mutton curry', 
            description: ' Today it is cooked using pressure cookers and slow cookers after briefly sautéing all the ingredients and spices in a big',
          },
          {
            id: 42,
            category: "food",
            img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/%22Hyderabadi_Dum_Biryani%22.jpg',
            title: 'Biryani',
            description: 'Biryani is the single most-ordered dish on Indian online food ordering and delivery services, and has been labelled as the most popular dish overall in India.',
          },

          {
            id: 43,
            category: "food",
            img: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Chicken_65.jpg',
            title: 'Chicken 65',
            description: 'Although Chicken 65 is well established as being the invention of A. M. Buhari of the Buhari Hotel chain,[2] its popularity as a dish has spawned several myths about its origin and name. One account claims that the dish emerged as a simple meal for Indian soldiers in 1965. Another account claims that it is a dish containing 65 chili peppers devised by an enterprising hotelier.',
          },

          {
            id: 44,
            category: "food",
            img: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Tandoorimumbai.jpg',
            title: 'Chicken tikka',
            description: 'A chicken tikka sizzler is a dish where chicken tikka is served on a heated plate with onions. The dish is also popular in Afghanistan, though the Afghan variant (like many other Persian, Turkish, and Arab dishes) is less spicy compared to the variants in the Indian subcontinent and uses beef and lamb in addition to chicken.',
          },
          {
            id: 45,
            category: "food",
            img: 'https://upload.wikimedia.org/wikipedia/commons/b/be/Punjabi_Chicken_Karahi.JPG',
            title: 'Chicken karahi',
            description: 'The dish is prepared in a karahi (a type of wok) and can take between 30 and 50 minutes [1][2][3] to prepare and cook the dish. Cumin, green chilis, ginger, garlic, tomatoes and coriander are key to the flavor of the dish.[4] It is usually served with naan, roti or rice. This dish is one of the hallmarks of Pakistani cuisine.',
          },
          {
            id: 46,
            category: "food",
            img: 'https://upload.wikimedia.org/wikipedia/commons/2/26/ChickenDopiaza1.jpg',
            title: 'Dopiaza',
            description: 'According to an alternative Mughal legend, the dish was created when Mullah Do-Piyaza—a courtier of Mughal Emperor Akbar— accidentally added a large quantity of onions to a dish. This legend is considered to be fictitious, as no Mughal-era records mention any courtier by this name, and humorous anecdotes about his life and jokes were published only in the late 19th century.',
          },
          {
            id: 47,
            category: "food",
            img: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Chicken_Noodle_Soup.jpg',
            title: 'Chicken soup',
            description: 'Modern American chicken soup, which typically includes root vegetables such as carrot, onion, leeks and celery, was a staple across Northern Europe and was brought to the United States by immigrants.',
          },
          {
            id: 48,
            category: "food",
            img: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Chicken_Kiev_-_Ukrainian_East_Village_restaurant.jpg',
            title: 'Chicken Kiev',
            description: 'The history of this dish is not well documented, and various sources make claims about its origin. Since the 18th century, Russian chefs have adopted many techniques of French haute cuisine and combined them with the local culinary tradition. The adoption was furthered by the French chefs',
          },
          {
            id: 49,
            category: "food",
            img: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Chicken_Korma.JPG',
            title: 'Korma',
            description: 'Korma has its roots in the Mughlai cuisine[1] of the Indian subcontinent. A characteristic Mughal dish, it can be traced back to the 16th century and to the Mughal expansion into South Asia. Kormas were often prepared in the Mughal court kitchens, such as the famous white korma, perhaps garnished with vark, said to have been served to Shah Jahan and his guests at the inauguration of the Taj Mahal.',
          },
          {
            id:36,
            category: "food",
            img: 'https://pristineorganics.com/wp-content/uploads/2019/06/03-1-1-1.jpg',
            title: 'MILLETS',
            description: 'Generally, millets are small-grained, annual, warm-weather cereals belonging to the grass family. They are highly tolerant of drought and other extreme weather conditions and have a similar nutrient content to other major cereals.'
          },
          {
            id: 37,
            category: "food",
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHEjlalMuVUPtZIcnic7HtYyKymdG72gQYB8c7Ld-fzvwty9stQdO6B8BaLLKWojy0SwI&usqp=CAU',
            title: `PROTEIN BAR`,
            description: 'When you’re working out later in the day, have a small snack about an hour before you get started. A sports bar that has 200 calories or less is a good option.Look for a bar with low-fiber content, ideally 3 grams or less. Too much fiber before a workout can upset your stomach.'
          },
          {
            id: 38,
            category: "food",
            img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/grilled-broccoli-1648146826.jpeg',
            title: 'BROCCOLI',
            description: 'Broccoli is a rich source of vitamins, minerals, and antioxidants. Antioxidants can help prevent the development of various conditions.'
          },
          {
            id: 39,
            category: "food",
            img: 'https://cdn-prod.medicalnewstoday.com/content/images/articles/271/271157/bananas-chopped-up-in-a-bowl.jpg',
            title: 'BANANA',
            description: 'Don’t have much time before you head to the gym? Eat an apple or a banana 5 or 10 minutes before your workout for some quick, natural energy.'
          },

        //   Hollywood
        {
          id: 50,
          category: "hollywood",
          img: 'https://upload.wikimedia.org/wikipedia/en/d/d8/Game_of_Thrones_title_card.jpg',
          title: 'Game of Thrones',
          description: 'Game of Thrones is an American fantasy drama television series created by David Benioff and D. B. Weiss for HBO. It is an adaptation of A Song of Ice and Fire, a series of fantasy novels by George R. R. Martin, the first of which is A Game of Thrones. The show was shot in the United Kingdom, Canada, Croatia, Iceland, Malta, Morocco, and Spain. It premiered on HBO in the United States on April 17, 2011, and concluded on May 19, 2019, with 73 episodes broadcast over eight seasons.',
        },
       {
          id: 51,
          category: "hollywood",
          img: 'https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg',
          title: 'Avengers: Endgame',
          description: 'The film was announced in October 2014 as Avengers: Infinity War – Part 2, but Marvel later removed this title. The Russo brothers joined as directors in April 2015, with Markus and McFeely signing on to write the script a month later.',
          date: 'April 22, 2019 '
        },
      
        {
          id: 52,
          category: "hollywood",
          img: 'https://upload.wikimedia.org/wikipedia/en/9/93/Jurassic_Park_%28franchise_logo%29.png',
          title: 'Jurassic Park',
          description: 'Jurassic Park, later also referred to as Jurassic World,[1] is an American science fiction media franchise created by Michael Crichton and centered on a disastrous attempt to create a theme park of cloned dinosaurs.',
          date: '1990–present'
        },
        {
          id: 53,
          category: "hollywood",
          img: 'https://upload.wikimedia.org/wikipedia/en/9/98/EvilDeadRiseTeaser.jpg',
          title: 'Evil Dead Rise',
          description: 'Evil Dead Rise had its premiere at South by Southwest (SXSW) on March 15, 2023, and was released in the United States on April 21, by Warner Bros. Pictures. The film received generally positive reviews from critics, and has grossed over $146 million worldwide against a production budget of $15–19 million, making it the highest-grossing film in the series.',
          date: '	March 15, 2023'
        },
        {
          id: 54,
          category: "hollywood",
          img: 'https://upload.wikimedia.org/wikipedia/en/e/e6/Kung_Fu_Panda_3_poster.jpg',
          title: 'Kung Fu Panda 3',
          description: 'Meanwhile, Master Shifu announces his retirement from teaching, and names Po as his successor. Pos first attempts to teach inadvertently injure the Furious Five, and Shifu advises Po should try to be more like himself and less like Shifu. Disheartened, Po returns home, where he meets Li Shan, a panda that both quickly realize is Pos biological father, who came to find Po after receiving a sign from the universe that his son was alive. The two immediately bond, much to the dismay and jealousy of Pos adoptive father Mr. Ping.',
          date: 'January 23, 2016'
        },
        {
          id: 55,
          category: "hollywood",
          img: 'https://upload.wikimedia.org/wikipedia/en/a/af/Star_Wars_The_Rise_of_Skywalker_poster.jpg',
          title: 'Star Wars: The Rise of Skywalker',
          description: 'They travel to Kijimi, where a droidsmith extracts the Sith text from C-3POs memory, revealing coordinates to a wayfinder. Rey senses Chewbacca is alive, and the group mount a rescue mission to a First Order Star Destroyer. Rey recovers the dagger and has visions of Ochi killing her parents with it. Kylo informs her that she is Palpatines granddaughter. When Palpatine had ordered Ochi to recover the young Rey, her parents hid her on Jakku. General Hux saves Poe, Finn, and Chewbacca from execution, revealing himself as the spy. After allowing the group to escape, Hux is discovered and executed by Allegiant General Pryde. The group fly the Falcon to the wayfinders coordinates on a moon in the Endor system.',
          date: '	December 16, 2019'
        },
        {
          id: 56,
          category: "hollywood",
          img: 'https://upload.wikimedia.org/wikipedia/en/2/2f/Ghost_Rider_2_Poster.jpg',
          title: 'Ghost Rider: Spirit of Vengeance',
          description: "The ritual to transfer Roarke into Danny's body begins while Johnny, Nadya, and Moreau secretly infiltrate the ceremony. Carrigan kills Moreau while Danny returns the Ghost Rider to Johnny. Danny grants the Rider the ability to stay in Rider form even in broad daylight, the Rider then pursues Roarke. The Rider kills Carrigan and flips the car that Roarke and Danny are in before using his chain to hurl Roarke back to Hell. With Roarke defeated, Zarathos regains his sanity and is restored to his previous incarnation as the Spirit of Justice. Channeling the blue flame of Zarathos, Johnny revives Danny. As the film ends, Johnny is seen riding down the road in Rider form, but the flames on his bike and body are now blue.",
          date: '	December 11, 2011'
        },
        {
          id: 57,
          category: "hollywood",
          img: 'https://upload.wikimedia.org/wikipedia/en/1/13/Monkey_King_Hero_is_Back_Chinese_film_poster.jpg',
          title: 'Monkey King: Hero Is Back',
          description: "Wukong attempts to break the Buddha's seal, to no avail. Liuer and the girl enthusiastically greet Wukong, not knowing he has lost his powers. Annoyed, Wukong attempts to lose the two, but is unable to evade them. A stone monster, created by the Buddha to keep Wukong imprisoned, attacks the three. Liuer manages to undo the spell on the monster, but falls off a cliff in the process. When he awakes, he finds out Wukong has saved him.",
          date: '10 July 2015'
        },
        {
          id: 58,
          category: "hollywood",
          img: 'https://upload.wikimedia.org/wikipedia/en/8/83/Dark_knight_rises_poster.jpg',
          title: 'The Dark Knight Rises',
          description: "The Dark Knight Rises premiered in New York City on July 16, 2012. The film was released in the United States and the United Kingdom on July 20, 2012. The film received positive reviews from critics who deemed it a satisfying conclusion to the trilogy. The film grossed over $1 billion worldwide, making it the second film in the Batman film series to earn $1 billion, and the highest-grossing Batman film to date.[6] In addition to being Nolan's highest-grossing film, it became the seventh-highest-grossing film of all time at the time of its release, as well as the third-highest-grossing film of 2012. It was named one of the top 10 films of 2012 by the American Film Institute.Plot",
          date: 'July 16, 2012'
        },
        {
          id: 59,
          category: "hollywood",
          img: 'https://upload.wikimedia.org/wikipedia/en/e/ed/Mission-_Impossible_%E2%80%93_Dead_Reckoning_Part_One_poster.jpg',
          title: 'Mission: Impossible – Dead Reckoning Part One',
          description: "Mission: Impossible – Dead Reckoning Part One premiered at the Spanish Steps in Rome on June 19, 2023, and is scheduled to be released in the United States on July 12, by Paramount Pictures. A direct sequel, Dead Reckoning Part Two, is set to be released on June 28, 2024.",
          date: '	June 19, 2023'
        },
        {
          id: 60,
          category: "hollywood",
          img: 'https://upload.wikimedia.org/wikipedia/en/f/f4/Fantastic_Four_2015_poster.jpg',
          title: 'Fantastic Four (2015 film)',
          description: "Childhood friends Reed Richards and Ben Grimm have worked together on a prototype teleporter since youth, eventually attracting the attention of Professor Franklin Storm, director of the Baxter Foundation, a government-sponsored research institute for young prodigies. Reed is recruited to join them and aid Storm's children, scientist Sue Storm and engineer Johnny Storm, into completing a Quantum Gate designed by Storm's protégé Victor Von Doom.",
          date: '	August 4, 2015'
        },
        {
          id: 61,
          category: "hollywood",
          img: 'https://upload.wikimedia.org/wikipedia/en/1/19/Iron_Man_3_poster.jpg',
          title: 'Iron Man 3',
          description: "Iron Man 3 premiered at the Grand Rex in Paris on April 14, 2013, and released in the United States on May 3, as the first film in Phase Two of the MCU. It received positive reviews from critics, with praise for its action sequences, Black's direction, and Downey's performance, though there was criticism for its portrayal of the Mandarin. The film was a box office success, grossing over $1.2 billion worldwide, making it the second-highest-grossing film of 2013 and the sixteenth film to gross over $1 billion. It finished its theatrical run as the fifth-highest-grossing film of all time, while its opening weekend was the sixth-highest of all time. The film received Best Visual Effects nominations at the Academy Awards and the BAFTA Awards.",
          date: '	 April 14, 2013'
        },

          {
            id: 62,
            category: "hollywood",
            img: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Black_Panther_Wakanda_Forever_poster.jpg/220px-Black_Panther_Wakanda_Forever_poster.jpg',
            title: 'BLACK PANTHER: WAKANDA FOREVER',
            description: 'The people of Wakanda fight to protect their home from intervening world powers as they mourn the death of King T Challa.',
            date: '11 November 2022'
          },
          {
            id: 63,
            category: "hollywood",
            img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQXDaxvXPpbQkUf2ifM7yg6b-AIsZT3o_hMf8nFLcttL-PVAM6r',
            title: 'AVATAR',
            description: 'A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.',
            date: '18 December 2009'
          },
          {
              id: 64,
              category: "hollywood",
              img: 'https://upload.wikimedia.org/wikipedia/en/a/a9/Black_Adam_%28film%29_poster.jpg',
              title: 'BLACK ADAM',
              description: 'Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods--and imprisoned just as quickly--Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.',
              date: '21 October 2022'
          },

        //   Technology
        {
          id: 65,
          category: "technology",
          img: 'https://upload.wikimedia.org/wikipedia/en/6/63/Battleground_Mobile_India.webp',
          title: 'Battlegrounds Mobile India',
          description: "Battlegrounds Mobile India, or BGMI, is a TPP-FPP survival shooter game in which up to 100 players compete in a battle royale, a type of large-scale last man standing deathmatch in which players compete to be the last one standing. Players can enter the match as individuals or as small groups of up to four.",
          developer: '	Krafton'
        },
        {
          id: 66,
          category: "technology",
          img: 'https://upload.wikimedia.org/wikipedia/en/b/b1/Black_Ops_3.jpg',
          title: 'Call of Duty: Black Ops III',
          description: "Black Ops III takes place in 2065, 40 years after the events of Black Ops II, in a world facing upheaval from climate change and new technologies. Similar to its predecessors, the story follows a group of black ops soldiers. The game's campaign is designed to support 4-player cooperative gameplay, allowing for bigger, more open level design and less corridor shooting. As the player character is cybernetically enhanced, players have access to various special activities. The game also features a standalone Zombies campaign mode, and a Nightmares mode which replaces all enemies as zombies.",
          developer: 'Treyarch'
        },
        {
          id: 67,
          category: "technology",
          img: 'https://upload.wikimedia.org/wikipedia/en/5/59/Clash_of_Clans_Logo.png',
          title: 'Clash of Clans',
          description: "Clash of Clans was released to generally positive reviews from critics. Four spin-off games in the same universe of Clash of Clans were developed by Supercell. The first, Clash Royale, was released in 2016.[6] The other three, Clash Quest, Clash Mini, and Clash Heroes, were announced in April 2021.[7][8] Clash Quest development was discontinued on 17 August 2022.[9]",
          developer: 'Supercell'
        },
        {
          id: 68,
          category: "technology",
          img: 'https://upload.wikimedia.org/wikipedia/en/3/38/Free_Fire_New_Logo.svg',
          title: 'Free Fire (video game)',
          description: "In Free Fire, players control a character in a third-person perspective and use a joystick to move. The fire button allows them to shoot and throw items. The character can perform actions such as jumping, crawling, and lying down. During gameplay, players can utilize the Gloo Wall grenade as a form of cover to protect against damage.[12]",
          developer: '	Garena'
        },
        {
          id: 69,
          category: "technology",
          img: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Tesla_Cybertruck_outside_unveil_modified_by_Smnt.jpg',
          title: 'Tesla Cybertruck',
          description: "Between the years 2012[20] and 2013, Elon Musk discussed the desire to build a truck with self-levelling suspension, making comparisons with a Ford F-250.[21][22] In early 2014 Musk predicted 4–5 years before work could start on the product.[",
          developer: '	Tesla, Inc.'
        },
        {
          id: 70,
          category: "technology",
          img: 'https://upload.wikimedia.org/wikipedia/en/a/ab/Dead_Trigger_2_iTunes_App_Store_Icon.png',
          title: 'Dead Trigger 2',
          description: "Dead Trigger 2 is a zombie-themed first person survival horror video game was developed and published by Madfinger Games, later acquired by DECA Games. It was released for Android and iOS devices on October 23, 2013, and for Facebook on February 20, 2014.[1] As with the original Dead Trigger, Dead Trigger 2 is a single-player zombie-themed shooter. Nvidia showcased Dead Trigger 2 as the first tech demo for their upcoming Tegra 4 mobile system-on-a-chip;[2][3] Slide to Play and Android Police compared the graphical quality to the Xbox 360 and PlayStation 3.",
          developer: '	DECA Games'
        },
        {
          id:71,
          category: "technology",
          img: 'https://upload.wikimedia.org/wikipedia/en/5/5d/Shadow_Fight_2_Cover_Art.png',
          title: 'Shadow Fight 2',
          description: "Shadow Fight 2 is a role-playing fighting game published and developed by Nekki and Banzai Games. It is the second installment in the Shadow Fight series and was soft-launched on October 22, 2013. The full game was released worldwide on May 1, 2014, for both the Android and iOS operating systems.[2] It was then released to Windows 8 and 8.1 on January 26, 2015,[3] and to the Nintendo Switch as a downloadable Nintendo eShop title on September 13, 2018.[4]",
          developer: 'Nekki and Banzai Games'
        },
        {
          id: 72,
          category: "technology",
          img: 'https://upload.wikimedia.org/wikipedia/en/6/6c/Asphalt_9_-_Legends_logo.png',
          title: 'Asphalt 9: Legends ',
          description: "Asphalt 9: Legends is a 2018 racing game developed by Gameloft Barcelona and published by Gameloft. Released on July 25, 2018, it's the fifteenth major game of Asphalt series. In comparison to previous entries, there are several new and improved features, such as a prestigious car lineup, new control schemes, including the autopilot mode called TouchDrive, and race modes, and the reimplemented shockwave nitro from Asphalt 6: Adrenaline. The graphics are considered significantly improved compared to its 2013 predecessor, Asphalt 8: Airborne.",
          developer: 'Gameloft Barcelona'
        },
        {
          id: 73,
          category: "technology",
          img: 'https://upload.wikimedia.org/wikipedia/en/0/0f/Into_the_Dead_logo.jpg',
          title: 'Into the Dead',
          description: "Into the Dead is a zombie-themed action video game developed by PikPok and released on December 6, 2012, for iOS, Android and Windows Phone 8 platforms.[1] A sequel titled Into the Dead 2: Zombie Survival was released for Android, Apple, and the Nintendo Switch.",
          developer: 'PikPok'
        },
        {
          id: 74,
          category: "technology",
          img: 'https://upload.wikimedia.org/wikipedia/en/1/18/Brawl_Stars_logo.png',
          title: "Brawl Stars is a multiplayer online battle arena[1] and third-person hero shooter[2] video game developed and published by the Finnish video game company Supercell.[3] It was released worldwide on December 12, 2018, on iOS and Android.[4] The game features various game modes, each with a different objective. Players can choose from a selection of Brawlers, which are characters that can be controlled with on-screen joysticks in a game match.",
          description: 'Brawl Stars',
          developer: 'Supercell'
        },
        {
          id: 75,
          category: "technology",
          img: 'https://upload.wikimedia.org/wikipedia/en/7/72/New_Mobile_Legends_Bang_Bang_2020_Logo.png',
          title: 'Mobile Legends: Bang Bang',
          description: "Mobile Legends: Bang Bang is a mobile multiplayer online battle arena (MOBA) game developed and published by Moonton, a subsidiary of ByteDance. Released in 2016, the game grew in popularity; most prominently in Southeast Asia",
          developer: 'Moonton'
        },
          {
            id: 76,
            category: "technology",
            img: 'https://miro.medium.com/max/480/1*VKY-Ldkt-iHobItql7G_5w.png',
            title: 'ANGULAR',
            description: 'Angular is a TypeScript-based, free and open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.',
            developer: 'Google'
          },
          {
            id: 77,
            category: "technology",
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc2Y2gmQB5zuaBd1AfN_AyEgoTgxPF65i7GwlvrbnnP_RUlubieG19WFnonCtS4ZfAox4&usqp=CAU',
            title: 'REACT',
            description: 'React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.',
            developer: 'Meta and community'
          },
          {
              id: 78,
              category: "technology",
              img: 'https://static.ebayinc.com/static/assets/Uploads/Stories/Articles/node.js.jpg',
              title: 'NODE-JS',
              description: 'Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript Engine, and executes JavaScript code outside a web browser.',
              developer: 'Microsoft Corporation, Ryan Dahl, OpenJS Foundation, Bryan Cantrill'
          }



    ])
  return (
    <ContextData.Provider value={[data, setData]}>
      {props.children}
    </ContextData.Provider>
  )
}

