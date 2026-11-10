
// apply js 
// user ko kya kya dikhna hain
// 1. zodiac sign
// 2. uske bare me good things means user ke bare me accha btana 
// 3. user ko uljana usko believe karvana ki astrology uske bare me sahi bta rahi hain
// 4. user ko upay recomended karna, jese daily cow ko rotti dena etc.
// 5. user ke future ke bare me btana 


// zodiac sign 12 hoti hain, toh hum inko month se calculate krenge mtlb jese january walo ki pehla zodiac sign
// feburary walo ka dusra zodiac sign and so on. 
// user ko birth month ke according zodiac sign denge 
// array of size 12
const zodiacSigns = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];

// user ke bare me acchi bate btana 
// array of size 31
const goodThings = [
    "You are confident",
    "You are hardworking",
    "You have a kind heart",
    "You are creative",
    "You are loyal",
    "You are intelligent",
    "You are optimistic",
    "You are courageous",
    "You are responsible",
    "You have strong determination",
    "You are friendly",
    "You are passionate",
    "You are honest",
    "You are patient",
    "You have good leadership qualities",
    "You learn from your mistakes",
    "You have a positive attitude",
    "You are good at solving problems",
    "You care deeply about others",
    "You are naturally curious",
    "You have strong communication skills",
    "You are adaptable to change",
    "You are emotionally strong",
    "You stay focused on your goals",
    "You are trustworthy",
    "You have a good sense of humor",
    "You are supportive of your friends",
    "You are determined to succeed",
    "You have a strong sense of responsibility",
    "You believe in yourself",
    "You have great potential for success"
];

// user ko uljana usko believe karvana ki astrology uske bare me sahi bta rahi hain  
// kuch ese message display karna , tum sbka blla karte ho lekin tumhara koi nahi karta 
// array of size 31
const messages = [
    "You help everyone, but sometimes nobody notices your efforts.",
    "You care deeply about others, even when they don't show the same care for you.",
    "You always try to make people happy, even at the cost of your own happiness.",
    "You give people many chances, even when they don't deserve them.",
    "You are strong for everyone, but sometimes you also need someone to be strong for you.",
    "You listen to everyone's problems, but rarely share your own.",
    "You forgive people easily, even when they hurt you deeply.",
    "You expect little from others, but always give your best to them.",
    "You hide your sadness behind a smile.",
    "You often put other people's needs before your own.",
    "You are loyal to people who may not always value your loyalty.",
    "You think a lot about the people you care about.",
    "You sometimes feel alone even when you are surrounded by people.",
    "You have a soft heart, but life has taught you to be strong.",
    "You remember small things about people because you genuinely care.",
    "You are always there for others when they need you.",
    "You sometimes give more love than you receive.",
    "You don't easily show people when you are hurt.",
    "You value genuine relationships more than temporary friendships.",
    "You may look calm outside, but your mind is often full of thoughts.",
    "You sometimes overthink conversations and situations.",
    "You want people to understand you without having to explain everything.",
    "You are capable of achieving great things when you believe in yourself.",
    "You don't give up easily, even after facing difficult situations.",
    "You are more sensitive than you appear to others.",
    "You become deeply attached to people you trust.",
    "You sometimes hide your feelings to avoid hurting others.",
    "You want to be appreciated, not just needed.",
    "You have experienced moments that made you emotionally stronger.",
    "You may not say it, but you want someone who truly understands you.",
    "Your kindness is one of your greatest strengths, so don't let the world change it."
];


// user ko upay recomended karna, jese daily cow ko rotti dena etc.
// array of size 20
const upay = [
    "Feed a cow with a roti daily.",
    "Offer water to the Sun every morning.",
    "Donate food to someone in need.",
    "Light a diya in the evening.",
    "Feed birds with grains regularly.",
    "Keep your surroundings clean and peaceful.",
    "Help an elderly person whenever possible.",
    "Donate clothes to someone who needs them.",
    "Chant a positive mantra for a few minutes daily.",
    "Offer water to a Tulsi plant every morning.",
    "Visit a temple and spend a few peaceful moments there.",
    "Avoid unnecessary arguments and negative conversations.",
    "Respect your parents and elders.",
    "Donate some food on Saturdays.",
    "Feed stray dogs when possible.",
    "Keep a small bowl of water for birds.",
    "Practice meditation for 10 minutes daily.",
    "Donate stationery or books to a needy student.",
    "Start your day with positive thoughts.",
    "Be kind and helpful to people around you."
];

// user ke future ke bare me btana 
// array of size 20
const future = [
    "A new opportunity may come into your life soon.",
    "Your hard work is likely to bring positive results.",
    "You may achieve an important goal in the coming months.",
    "A positive change may enter your professional life.",
    "You may meet someone who becomes important in your life.",
    "Your financial situation may gradually improve.",
    "You may discover a new talent or interest.",
    "A long-awaited wish may start moving closer to reality.",
    "You may receive good news when you least expect it.",
    "Your confidence may grow through a new experience.",
    "A difficult phase may soon turn into a learning opportunity.",
    "You may get a chance to travel to a new place.",
    "Your relationships may become stronger with better communication.",
    "A new friendship may bring happiness into your life.",
    "Your patience may be rewarded with a valuable opportunity.",
    "You may make an important decision about your future.",
    "Your efforts may soon be noticed and appreciated.",
    "A fresh beginning may bring positive energy into your life.",
    "You may overcome a challenge that has been bothering you.",
    "The coming period may bring growth, learning, and new possibilities."
];

// apply event listner on form 
 
const formelement = document.querySelector('form');
formelement.addEventListener("submit",(event)=>{
    event.preventDefault();

// jo values form me dalli hain unko access karna pdega 
const first = document.getElementById('a');
const second = document.getElementById('b');

// dob wale ka access , goodThings aur messages ke elements ko access karne ke liye use.
const third = document.getElementById('c');
const index =  Number(third.value); // jo .value karke value atti hain vo string ki form me atti hain
// usko number me convert karna pdega 

// month wale ka access, ye 12 hova month iste zodiac sign ke elements ka access krenge 
const fourth = document.getElementById('d');
const index2 =  Number(fourth.value);

const fifth = document.getElementById('e');
const index3 = Number(fifth.value);

// mere pass jo upay aur future wala array hain vo 20-20 size ka hain toh agr isme math.random() ka use karu
// toh user har bar jab apni information fill krega toh usko upay aur future me alag alag 
// message milega jo pichli baar information fill karne par alag tha sloution kese kare
// 1.agr hum inke size ko 31 ka bna de toh dob toh user ki age 1 se 31 lag hi hogi toh user ko dob 
// ka index bna kar message de denge har dob ke saath alag message milega 
// 2. size 20 ka hi rkhte hain kuch logic bna dete hain jisme taki user jab bi apni information fill kre
// toh use same message mile

// we are prefer 2 solution 
// hmko index chahiye 0-19 lag kyuki arrays(upay and future) ka size 20 hai toh modulus by 20 kar skte hain 
const index4 = (index+index2+index3)%20; // jo value ayegi vo 0 se 19 lag hi ayegi 20 se chooti 
// jisse bi modulus karte hain value usse chotti ati hain 

const lastelement = document.getElementById('last');
lastelement.innerText = `Hello ${first.value} ${second.value}. Your zodiac Signs is ${zodiacSigns[index2-1]}. ${goodThings[index-1]} and ${messages[index-1]}. Our recomendition is to you ${upay[index4]}. Your Future will be ${future[(index4)]}`  ;
  
})