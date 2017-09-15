//UN object data 
//learn about https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
//See @jared #quick-question in slack 6/26/17

const focusAreas = {

   un1 : {
    score: 0,
    pairs: [],
    image: 'UNimages/sdg01.png',
    label: 'Poverty',
    slug: 'un1',
    info: `<h4>End poverty in all its forms everywhere</h4><p>Millions of people around the world lack the basic resources to enjoy a decent life. Goal 1 will make sure that everyone has access to food, shelter, clothing, healthcare and education so they can fully participate in society.</p>`
  },
  
   un2 : {
    score: 0,
    pairs: [],
    image: 'UNimages/sdg02.png',
    label: 'Hunger',
    slug: 'un2',
    info: `<h4>End hunger, achieve food security and improved nutrition and promote sustainable agriculture</h4><p>While there is food available to feed everyone, so many people, including children, still do not have enough food to eat. Goal 2 focuses on addressing poor agricultural practices, food waste, and environment degradation to ensure no one goes hungry.</p>`

  },
  
   un3 : {
    score: 0,
    pairs: [],
    image: 'UNimages/sdg03.png',
    label: 'Health',
    slug: 'un3',
    info: `<h4>Ensure healthy lives and promote well-being for all at all ages</h4><p>When people are in good health, societies prosper. While a lot has been done to reduce the impact of HIV/AIDS, malaria and other diseases in recent years, real progress can only be achieved when everyone, including women and children, have access to good health care.</p>`

  },
  
   un4 : {
    score: 0,
    pairs: [],
    image: 'UNimages/sdg04.png',
    label: 'Education',
    slug: 'un4',
    info: `<h4>Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all</h4><p>Access to education can help lift people out of poverty, bring a deeper understanding of the world around us and provide better opportunities for everyone, including girls. Goal 4 is all about ensuring everyone has access to learn no matter who they are or where they are.</p>`

  },
  
   un5 : {
    score: 0,
    pairs: [],
    image: 'UNimages/sdg05.png',
    label: 'Gender Equality',
    slug: 'un5',
    info: `<h4>Achieve gender equality and empower all women and girls</h4><p>Women and girls still suffer discrimination and violence and that's half of the world's population. Goal 5 on achieving gender equality, that is, equal access to education, health care and decent work, can only benefit societies.</p>`

  },
  
   un6 : {
    score: 0,
    pairs: [],
    image: 'UNimages/sdg06.png',
    label: 'Water',
    slug: 'un6',
    info: `<h4>Ensure availability and sustainable management of water and sanitation for all</h4><p>There are billions of people all over the world without access to clean water and toilets, a human right that many of us take for granted. Water scarcity and inadequate sanitation has a huge cost, not least of all the number of people, especially children, that die from disease every year.</p>`

  },
  
   un7 : {
    score: 0,
    pairs: [],
    image: 'UNimages/sdg07.png',
    label: 'Energy',
    slug: 'un7',
    info: `<h4>Ensure access to affordable, reliable, sustainable and modern energy for all</h4><p>We cannot only talk about providing affordable and reliable energy to the billions who still rely on wood and charcoal for cooking and heating. Goal 7 also underscores the need for clean and renewable energy to help combat climate change.</p>`

  },
  
   un8 : {
    score: 0,
    pairs: [],
    image: 'UNimages/sdg08.png',
    label: 'Work',
    slug: 'un8',
    info: `<h4>Promote sustained, inclusive and sustainable economic growth, full and productive employment and decent work for all</h4><p>With global unemployment on the rise, we need to find ways to create more jobs. Goal 8 calls for more jobs that not only provide decent pay but stimulate the economy and provide equal opportunities for both men and women while protecting the environment.</p>`

  },
  
   un9 : {
    score: 0,
    pairs: [],
    image: 'UNimages/sdg09.png',
    label: 'Industry',
    slug: 'un9',
    info: `<h4>Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation</h4><p>Goal 9, in simple terms, states that for a society to grow, it should encourage industries that bring opportunities to everyone while protecting the environment. These industries must also be supported by resilient infrastructure such as reliable transport as well as by technological innovation.</p>`

  },
  
   un10 : {
    score: 0,
    pairs: [],
    image: 'UNimages/sdg10.png',
    label: 'Reduce Inequality',
    slug: 'un10',
    info: `<h4>Reduce inequality within and among countries</h4><p>For real improvements in a society, everyone needs to have the access to opportunities that will let them grow as individuals. But this is not the case in many places where people face discrimination because of their gender, disability status, ethnic or racial group, or background. Goal 10 seeks to make sure everyone everywhere has a chance to live a healthy and happy life.</p>`

  },
  
   un11 : {
    score: 0,
    pairs: [],
    image: 'UNimages/sdg11.png',
    label: 'Cities & Towns',
    slug: 'un11',
    info: `<h4>Make cities and human settlements inclusive, safe, resilient and sustainable</h4><p>Cities are lively hubs for ideas, commerce, culture, science, productivity and much more. But they face many challenges such as pollution, lack of basic services for many citizens, and declining infrastructure. Our cities and villages need to be clean and safe cities, with good housing and basic services like water and electricity. They also need clean transport systems and green areas that everyone can enjoy.</p>`

  },
  
   un12 : {
    score: 0,
    pairs: [],
    image: 'UNimages/sdg12.png',
    label: 'Consumption',
    slug: 'un12',
    info: `<h4>Ensure sustainable consumption and production patterns</h4><p>Goal 12 wants to make us think twice about the things we use, the waste we create, and how that impacts our planet. Changing our behaviour towards more sustainable actions such as recycling really makes a difference when everyone - that includes individuals, companies, governments - contributes. There are many little things you can do to achieve this goal.</p>`
  },
  
   un13 : {
    score: 0,
    pairs: [],
    image: 'UNimages/sdg13.png',
    label: 'Climate',
    slug: 'un13',
    info: `<h4>Take urgent action to combat climate change and its impacts</h4><p>Our climate has always been changing, but in the past 200 years the changes have been more extreme because of human activity. Climate change is now affecting every country on every continent and the poorest and most vulnerable people are being affected the most. Goal 13 is about finding solutions like renewable energy and clean technologies to fix climate change. But it will take actions from governments, the private sector and civil society to make a significant impact.</p>`

  },
  
   un14 : {
    score: 0, 
    pairs: [],
    image: 'UNimages/sdg14.png',
    label: 'Life Below Water',
    slug: 'un14',
    info: `<h4>Conserve and sustainably use the oceans, seas and marine resources for sustainable development</h4><p>Goal 14 is about protecting the oceans, seas and all its species. Why? Because oceans provide food, medicines, biofuels, and jobs for millions of people. Keeping healthy oceans also helps us address climate change. We need healthy oceans, and they need us to protect them.</p>`

  },
  
   un15 : {
    score: 0,
    pairs: [],
    image: 'UNimages/sdg15.png',
    label: 'Life on Land',
    slug: 'un15',
    info: `<h4>Protect, restore and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification, and halt and reverse land degradation and halt biodiversity loss</h4><p>We are all part of the global ecosystem. Goal 15 is about making sure that we stop all the things that threaten our global home. This includes deforestation, land degradation, and loss of animal and plant species. Nature contributes so much to people's lives which is why it is so important to protect it.</p>`

  },
  
   un16 : {
    score: 0,
    pairs: [],
    image: 'UNimages/sdg16.png',
    label: 'Peace',
    slug: 'un16',
    info: `<h4>Promote peaceful and inclusive societies for sustainable development, provide access to justice for all and build effective, accountable and inclusive institutions at all levels</h4><p>Too many people experience war and violence. Goal 16 is about finding ways to make sure everyone lives in a peaceful society, where they can have access to justice, and don't have to live in fear.</p>`

  },
  
   un17 : {
    score: 0,
    pairs: [],
    image: 'UNimages/sdg17.png',
    label: 'Partnership',
    slug: 'un17',
    info: `<h4>Strengthen the means of implementation and revitalize the global partnership for sustainable development</h4><p>To make all the goals a reality will require the participation of everyone. That includes governments, the private sector, civil society organizations and people like you. The best part is that we don't have to work alone. If we join forces and partner we can get there faster and succeed on each goal.</p>`

  }
}

export default focusAreas;