var data= {
    chatinit:{
        title: ["Hello <span class='emoji'> &#128075;</span>","I am Mr. Chatbot","How can I help you?"],
        options: ["Adventure  <span class='emoji'> &#10024;</span>","News <span class='emoji'> 📰</span>","Shopping <span class='emoji'> &#128090;</span>","Music <span class='emoji'> &#127925;</span>"]
    },
    adventure : {
        title:["Please select category"],
        options:['Trekking','Wildlife Safaries','OffRoad Jaunts','Water Sports'],
        url : {
            
        }
    },
    
    news: {
        title:["Today's Top 5 Headlines"],
        options:["Top 10 must visit places","varkala Beautiful and attractive floating bridge","The ultimate Munnar Experience.","Vagamon through the lens of a Solo Traveler"],
        url : {
            more:"https://www.youtube.com/shorts/tYQx95kzZ-s",
            link:["https://www.youtube.com/shorts/tYQx95kzZ-s","https://www.youtube.com/watch?v=J2_KhZutRVA","https://www.youtube.com/watch?v=vUDx64AgSNU","https://www.youtube.com/watch?v=8xM-4oSGEQM"]
        }
    },
    shopping: {
        title:["Thanks for your response","Welcome to shopping zone <span class='emoji'> &#128090;</span>","Please select one of the below options to proceed further"],
        options:['Electronics','Beauty products','Mobiles','Men Fashion','Women fashion'],
        url : {
            
        }
    },
    electronics: {
        title:["Thanks for your response","Here are some electronic items for you","Click on it to know more"],
        options:['Televisions','Cameras','Gaming Consoles','Headphones','Speakers'],
        url : {
            more:"https://www.youtube.com/@webhub/videos",
            link:["#","#","#","#","#"]
        }
    },
    beauty: {
        title:["Thanks for your response","Here are some beauty products for you","Click on it to know more"],
        options:['Make-up & Nails','Skin Care','Fragrance','Hair care'],
        url : {
            more:"https://www.youtube.com/@webhub/videos",
            link:["#","#","#","#"]
        }
    },
    mobiles: {
        title:["Thanks for your response","These are some results based on your input","Click on it to know more"],
        options:['Mobile Phones','Cases & Covers','Power Banks','Tablets'],
        url : {
            more:"https://www.youtube.com/@webhub/videos",
            link:["#","#","#","#"]
        }
    },
    men: {
        title:["Thanks for your response","These are some results based on your input","Click on it to know more"],
        options:['Clothing','Shirts','T-shirts','Innerwear','Jeans'],
        url : {
            more:"https://www.youtube.com/@webhub/videos",
            link:["#","#","#","#","#"]
        }
    },
    women: {
        title:["Thanks for your response","These are some results based on your input","Click on it to know more"],
        options:['Clothing','Western Wear','Ethnic Wear','Top Brands'],
        url : {
            more:"https://www.youtube.com/@webhub/videos",
            link:["#","#","#","#"]
        }
    },
    music: {
        title:["These are some latest songs <span class='emoji'> &#127925;</span>"],
        options: ["song 1","song 2","song 3","song 4","song 5"],
        url : {
            more:"https://www.youtube.com/watch?v=K69cvaes5xQ&t=338s",
            link:["https://www.youtube.com/watch?v=K69cvaes5xQ&t=338s","https://www.youtube.com/watch?v=MoCeyxAdd8I","https://www.youtube.com/watch?v=pVkDZueTBpY","https://www.youtube.com/watch?v=HHxtLPECrQA","https://www.youtube.com/watch?v=H1UdC4ejBFs"]
        }
    },
    trekking: {
        title: ["Thanks for your response","Here are some preferred destinations"],
        options: ["Agasthyakoodam","Parambikulam","Munnar"],
        url: {
            // more:"https://www.youtube.com/@webhub/videos",
            // link:["https://www.google.com/search?q=kovalam+beach+images","#","#","#","#"]
        }
    },
    agasthyakoodam: {
        title: ["Thanks for your response","Here are some images and details of Agasthyakoodam"],
        options: ["<span style='font-size: 13px;'>Agasthyakoodam trekking in Thiruvananthapuram is one that offers the most unusual wildlife experience, something you should consider including in your bucket list of must-experience adventure activities.</span><img height='150px' width='250px' src='https://www.keralatourism.org/images/enchanting_kerala/large/agasthyakoodam_hills20200226114644_989_1.jpg'> <img height='150px' width='200px' src='https://1.bp.blogspot.com/-CVaZvVZLjDA/Xj_8MDJq2GI/AAAAAAAAEUo/k2n49X8OPtEO50RLg7QIjBIZO_8kuPv7QCNcBGAsYHQ/s320/1.jpg'> <img height='150px' width='200px' src='https://1.bp.blogspot.com/-zhCnDVfG3dc/XkAEoTdtARI/AAAAAAAAEYE/zA3yf5v6j9QFh1JQisFwB-wtS2vCxHX2wCNcBGAsYHQ/s1600/7.jpg'>"],
        url: {
            // more:"https://www.youtube.com/@webhub/videos",
            // link:["https://www.google.com/search?q=kovalam+beach+images","#"]
        }
    },
    parambikulam: {
        title: ["Thanks for your response","Here are some images and details of Parambikulam"],
        options: ["<span style='font-size: 13px;'> Parambikulam Tiger Reserve, located in Kerala, is a biodiversity hotspot known for its rich flora and fauna. The reserve offers various trekking trails, allowing visitors to explore the wilderness and experience the beauty of nature.</span><img height='150px' width='250px' src='https://trip2kerala.com/wp-content/uploads/2021/12/Parambikulam_Tiger_Reserve.jpg'> <img height='150px' width='200px' src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/cc/53/f4/getlstd-property-photo.jpg?w=1200&h=-1&s=1'> <img height='150px' width='200px' src='data:image/jpeg;base64,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'>"],
        url: {
            // more:"https://www.youtube.com/@webhub/videos",
            // link:["https://www.google.com/search?q=kovalam+beach+images","#"]
        }
    },
    munnar: {
        title: ["Thanks for your response","Here are some images and details of Munnar"],
        options: ["<span style='font-size: 13px;'>The Meesapulimala trek is one of the most adventurous and challenging treks in Munnar.</span><img height='150px' width='250px' src='https://www.keralatourism.org/images/enchanting_kerala/large/agasthyakoodam_hills20200226114644_989_1.jpg> <img height='150px' width='200px' src='https://1.bp.blogspot.com/-CVaZvVZLjDA/Xj_8MDJq2GI/AAAAAAAAEUo/k2n49X8OPtEO50RLg7QIjBIZO_8kuPv7QCNcBGAsYHQ/s320/1.jpg'> <img height='150px' width='200px' src='https://1.bp.blogspot.com/-zhCnDVfG3dc/XkAEoTdtARI/AAAAAAAAEYE/zA3yf5v6j9QFh1JQisFwB-wtS2vCxHX2wCNcBGAsYHQ/s1600/7.jpg'>"],
        url: {
            // more:"https://www.youtube.com/@webhub/videos",
            // link:["https://www.google.com/search?q=kovalam+beach+images","#"]
        }
    },
    wildlife: {
        title: ["Thanks for your response", "Here are some Kerala wildlife safaris"],
        options: ["Periyar Tiger Reserve", "Wayanad Wildlife Sanctuary", "Silent Valley National Park"],
        url: {
            more: "https://www.example.com/kerala-wildlife-more",
            link: ["https://www.example.com/periyar-tiger-reserve", "https://www.example.com/wayanad-wildlife-sanctuary", "https://www.example.com/silent-valley-national-park"]
        }
    },

    offroad: {
        title: ["Thanks for your response","Here are some preferred destinations"],
        options: ["Amminikkad - Kodikuthimala Trail","Elephant Salt Pond Trail","Mullaperiyar Dam"],

        url: {
            // more:"https://www.youtube.com/@webhub/videos",
            // link:["https://www.google.com/search?q=kovalam+beach+images","#","#","#","#"]
        }
    },
    amminikkad: {
        title: ["Thanks for your response","Here are some images and details of Amminikkad - Kodikuthimala Trail"],
        options: ["<span style='font-size: 13px;'>The trail is open year-round and is beautiful to visit anytime.</span><img height='150px' width='250px' src='https://media-cdn.tripadvisor.com/media/photo-s/0e/75/4f/07/photo1jpg.jpg'><img height='150px' width='200px' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQspgLxDSq-5wjm06BhL74arqhxjeKDy5yVdg&usqp=CAU'> <img height='150px' width='200px' src='https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvNDEyNDkyMDMvMTRlNzM2NzFkZjhkOGFhMzFhYmU0NmQzMDc5NTIyZjYuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJ3ZWJwIiwicmVzaXplIjp7IndpZHRoIjo1MDAsImhlaWdodCI6NTAwLCJmaXQiOiJpbnNpZGUifSwicm90YXRlIjpudWxsLCJqcGVnIjp7InRyZWxsaXNRdWFudGlzYXRpb24iOnRydWUsIm92ZXJzaG9vdERlcmluZ2luZyI6dHJ1ZSwib3B0aW1pc2VTY2FucyI6dHJ1ZSwicXVhbnRpc2F0aW9uVGFibGUiOjN9fX0='>"],
        url: {
            // more:"https://www.youtube.com/@webhub/videos",
            // link:["https://www.google.com/search?q=kovalam+beach+images","#"]
        }
    },
    elephant: {
        title: ["Thanks for your response","Here are some images and details of Elephant Salt Pond Trail"],
        options: ["<span style='font-size: 13px;'>This is a popular trail for birding, hiking, and off-road driving.</span><img height='150px' width='250px' src='https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2Fd62eef1c-eeef-11e6-8d68-d0e249a86942.jpg?crop=1478%2C831%2C11%2C77'><img height='150px' width='200px' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQspgLxDSq-5wjm06BhL74arqhxjeKDy5yVdg&usqp=CAU'> <img height='150px' width='200px' src='https://southjerseyadventures.files.wordpress.com/2014/04/20140427-103050.jpg?w=1136&h=852'>"],
        url: {
            // more:"https://www.youtube.com/@webhub/videos",
            // link:["https://www.google.com/search?q=kovalam+beach+images","#"]
        }
    },
    mullaperiyar :{
        title: ["Thanks for your response","Here are some images and details of Mullaperiyar Dam"],
        options: ["<span style='font-size: 13px;'>This dam place is nice place for picnic with friends..</span><img height='150px' width='250px' src='https://static.toiimg.com/thumb/resizemode-4,width-1280,height-720,msid-87251530/87251530.jpg'><img height='150px' width='200px' src='https://static.toiimg.com/thumb/msid-70599402,width-400,resizemode-4/70599402.jpg'> <img height='150px' width='200px' src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/70/e3/f0/mullaperiyar-dam.jpg?w=1200&h=-1&s=1'>"],
        url: {
            // more:"https://www.youtube.com/@webhub/videos",
            // link:["https://www.google.com/search?q=kovalam+beach+images","#"]
        }
    },
    water: {
        title: ["Thanks for your response","Here are some preferred water sports places"],
        options: ["Alleppey","Kovalam","Varkala"],
        url: {
            // more:"https://www.youtube.com/@webhub/videos",
            // link:["https://www.google.com/search?q=kovalam+beach+images","#","#","#","#"]
        }
    },
    alleppey: {
        title: ["Thanks for your response","Here are some images and details of Alleppey Water sports"],
        options: ["<span style='font-size: 13px;'>kayaking, Catamaran Sailing</span><img height='150px' width='250px' src='https://blog.thomascook.in/wp-content/uploads/2018/05/Overview.jpg'><img height='150px' width='250px' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1AuunruwnNwVhRh6Efith6k7QvLhRmWIjwg&usqp=CAU'><img height='150px' width='200px' src='https://media1.thrillophilia.com/filestore/3vm97zdqai806e6tetl6aalz61l5_1586163734_shutterstock_1191219970.jpg.png'> <img height='150px' width='200px' src='https://assets.traveltriangle.com/blog/wp-content/uploads/2014/11/parasailing-at-alappuzha-beach-in-alleppey.jpg?tr=w-400'>"],
        url: {
            // more:"https://www.youtube.com/@webhub/videos",
            // link:["https://www.google.com/search?q=kovalam+beach+images","#"]
        }
    },
    kovalam: {
        title: ["Thanks for your response","Here are some images and details of Kovalam Water sports"],
        options: ["<span style='font-size: 13px;'>surfing , Catamaran Sailing</span><img height='150px' width='250px' src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fcevextravelexpert.com%2Fsnorkeling-in-kerala%2F&psig=AOvVaw1u3gyGibDKb679lckpGD_X&ust=1710004948767000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCIDA1P2W5YQDFQAAAAAdAAAAABAE'><img height='150px' width='250px' src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.thrillophilia.com%2Fstates%2Fkerala%2Ftags%2Fscuba-diving&psig=AOvVaw1u3gyGibDKb679lckpGD_X&ust=1710004948767000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCIDA1P2W5YQDFQAAAAAdAAAAABAJ'><img height='150px' width='200px' src='https://www.kovalam.com/userfiles/1510901593_surf.jpg'> <img height='150px' width='200px' src='https://d26dp53kz39178.cloudfront.net/media/uploads/products/4_J3Rytd8.jpg'>"],
        url: {
            // more:"https://www.youtube.com/@webhub/videos",
            // link:["https://www.google.com/search?q=kovalam+beach+images","#"]
        }
    },
    varkala: {
        title: ["Thanks for your response","Here are some images and details of Varkala Water sports"],
        options: ["Varkala watersport", "Varkala watersport activity"],
        url: {
            more:"https://www.youtube.com/watch?v=N8b0RXv1cRA",
            link:["https://www.youtube.com/watch?v=N8b0RXv1cRA","https://www.youtube.com/watch?v=VipSG0iT0jo"]
        }
    },


    images: {
        title: ["Thanks for your response","Here are some genre based images and links"],
        options: ["hello","hi"],
        url: {
            // more:"https://www.youtube.com/@webhub/videos",
            // link:["https://www.google.com/search?q=kovalam+beach+images","#"]
        }
    },
    bollywood: {
        title: ["Thanks for your response","Here are some genre based movies"],
        options: ["Comedy","Horror","Sci-Fi","Romance","Action"],
        url: {
            more:"https://www.youtube.com/@webhub/videos",
            link:["#","#","#","#","#"]
        }
    },
    web: {
        title: ["Thanks for your response","Here are some genre based web series"],
        options: ["Comedy","Horror","Sci-Fi","Romance","Action"],
        url: {
            more:"https://www.youtube.com/@webhub/videos",
            link:["#","#","#","#","#"]
        }
    },
    others: {
        title: ["Here are some more options for you"],
        options: ["YouTube","Netflix","Amazon Prime","Hot Star"],
        url: {
            more:"https://www.youtube.com/",
            link:["#","#","#","#","#"]
        }
    },
}

document.getElementById("init").addEventListener("click",showChatBot);
var cbot= document.getElementById("chat-box");

var len1= data.chatinit.title.length;

function showChatBot(){
    // console.log(this.innerText);
    // if(this.innerText=='START CHAT'){
        // document.getElementById('test').style.display='block';
        // document.getElementById('init').innerText='CLOSE CHAT';
        initChat();
    // }
    // else{
    //     location.reload();
    // }
}

function initChat(){
    j=0;
    cbot.innerHTML='';
    for(var i=0;i<len1;i++){
        setTimeout(handleChat,(i*500));
    }
    setTimeout(function(){
        showOptions(data.chatinit.options)
    },((len1+1)*500))
}

var j=0;
function handleChat(){
    console.log(j);
    var elm= document.createElement("p");
    elm.innerHTML= data.chatinit.title[j];
    elm.setAttribute("class","msg");
    cbot.appendChild(elm);
    j++;
    handleScroll();
}

function showOptions(options){
    for(var i=0;i<options.length;i++){
        var opt= document.createElement("span");
        var inp= '<div>'+options[i]+'</div>';
        opt.innerHTML=inp;
        opt.setAttribute("class","opt");
        opt.addEventListener("click", handleOpt);
        cbot.appendChild(opt);
        handleScroll();
    }
}

function handleOpt(){
    console.log(this);
    var str= this.innerText;
    var textArr= str.split(" ");
    var findText= textArr[0];
    
    document.querySelectorAll(".opt").forEach(el=>{
        el.remove();
    })
    var elm= document.createElement("p");
    elm.setAttribute("class","test");
    var sp= '<span class="rep">'+this.innerText+'</span>';
    elm.innerHTML= sp;
    cbot.appendChild(elm);

    console.log(findText.toLowerCase());
    var tempObj= data[findText.toLowerCase()];
    handleResults(tempObj.title,tempObj.options,tempObj.url);
}





function handleDelay(title){
    var elm= document.createElement("p");
        elm.innerHTML= title;
        elm.setAttribute("class","msg");
        cbot.appendChild(elm);
}


function handleResults(title,options,url){
    for(let i=0;i<title.length;i++){
        setTimeout(function(){
            handleDelay(title[i]);
        },i*500)
        
    }

    const isObjectEmpty= (url)=>{
        return JSON.stringify(url)=== "{}";
    }

    if(isObjectEmpty(url)==true){
        console.log("having more options");
        setTimeout(function(){
            showOptions(options);
        },title.length*500)
        
    }
    else{
        console.log("end result");
        setTimeout(function(){
            handleOptions(options,url);
        },title.length*500)
        
    }
}

function handleOptions(options,url){
    for(var i=0;i<options.length;i++){
        var opt= document.createElement("span");
        var inp= '<a class="m-link" href="'+url.link[i]+'">'+options[i]+'</a>';
        opt.innerHTML=inp;
        opt.setAttribute("class","opt");
        cbot.appendChild(opt);
    }
    var opt= document.createElement("span");
    var inp= '<a class="m-link" href="'+url.more+'">'+'See more</a>';

    const isObjectEmpty= (url)=>{
        return JSON.stringify(url)=== "{}";
    }

    console.log(isObjectEmpty(url));
    console.log(url);
    opt.innerHTML=inp;
    opt.setAttribute("class","opt link");
    cbot.appendChild(opt);
    handleScroll();
}

function handleScroll(){
    var elem= document.getElementById('chat-box');
    elem.scrollTop= elem.scrollHeight;
}

