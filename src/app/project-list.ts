export interface Project{
  title: string;
  description: string;
  skills: string[];
  pictures: string[]
}

export const Projects: Project[] = [
  {
    title: "Truck & Trace",
    description: "In my third year of university I did an internship at the company NewCold. NewCold uses trucks to transport their goods and they wanted me to develop a system which would help them track their trucks from the office. I developed a system which contained an app, an API, an adapter and a database. The concept is as follows: the truck drivers install the app on a mobile phone that they take with them on the trip, the app is connected to the API and sends information about the trip (like coordinates) to the API with certain intervals. The API then sends the data to the database where this data is stored and can be used to track the trucks. The adapter takes care of other data sources which are on the same level as the app but which send their data in a different data-format. The adapter makes sure that all data which is sent to the API is all the same data-format.",
    skills: ["Android", "C#", "ASP.NET", "Microsoft Azure"],
    pictures:[ "https://cdn.discordapp.com/attachments/616314074547879938/980927555634876455/unknown.png",
    "https://cdn.discordapp.com/attachments/616314074547879938/980928170389811230/unknown.png"]
  },
  {
    title: "Crimescripts",
    description: "In my third year of university I did a project with the public prosecution service of the Netherlands (Openbaar Ministerie). As a team we had to develop a tool which will help the government fight money laundering using crypto currency. We developed a crimescript tool. A crimescript is a script which shows what steps a criminal takes in order to complete a criminal activity. The point of a crimescript is making sure you get a very clear and simple overview of the criminal activity. My responsiblity in this project was the front-end part of the tool. Therefore everything shown on the website of the tool was developed by me.",
    skills: ["HTML","CSS","TypeScript","Angular", "CI/CD"],
    pictures: ["https://cdn.discordapp.com/attachments/616314074547879938/1012833980489400341/unknown.png"]
  },
  {
    title: "Resume Website",
    description: "A website I developed to visualize my resume. It shows information about myself, the projects I am proud of, my skills and my contact details.",
    skills: ["Angular","HTML","CSS","Typescript", "Javascript"],
    pictures:[ "https://cdn.discordapp.com/attachments/616314074547879938/1022503877490266112/unknown.png"]
  },
  {
    title: "Estelling The Card Game",
    description: "At the end of my first year in university I developed, together with a team, a card game for mobile phones. The game was meant for visitors of the Efteling, an amusement park in the Netherlands. The app was created to give the visitors a better experience in the park. With the game we developed, users can play a card game against fairytail characters from the Efteling. All they have to do is scan a code with their phone at certain place in the park. This will lead them into playing a card game on their phone against the corresponding character of the place where they scanned the code. Everytime you beat a new character for the first time, the game will give you a new card that u can use in your future games. This way you can try to get as many cards as you can. You can kinda compare it to Pokemon cards.",
    skills: ["Java","Android"],
    pictures: ["https://cdn.discordapp.com/attachments/616314074547879938/980954232633057370/unknown.png",
    "https://cdn.discordapp.com/attachments/616314074547879938/981115645666148352/unknown.png","https://cdn.discordapp.com/attachments/616314074547879938/981115833214468126/unknown.png"]
  },
  {
    title: "Remote Healthcare",
    description: "At the beginning of my second year in university I developed, together with a team, a system that will help doctors help their patients remotely. With this system a patient can cycle on a hometrainer at home, all the data contained from the hometrainer is sent to the doctor who can keep track of this in real-time. The data that is sent to the doctor are things like heartrate, speed, distance traveled, etc. The doctor can also change the resistance which will change the amount of effort the patient has to put in to keep pushing the bike pedals. The patient also has a simulation of the landscape he is cycling on. The landscape changes according to the intensity that the doctor selects. So if the doctor selects a high resistance, the patient will see hills on their simulation and he will have to put in more effort to push the bike pedals.",
    skills: ["C#", "Server-client"],
    pictures: ["https://cdn.discordapp.com/attachments/616314074547879938/981125625194618930/unknown.png", "https://cdn.discordapp.com/attachments/616314074547879938/981125050088431646/unknown.png"]
  },
  {
    title: "Digi-tours Breda",
    description: "In my second year of university I developed, together with a team, an app for tourists in Breda, The Netherlands. With the app a tourist in Breda can select a route which he can then follow by following the navigation on the app. Every route has a different theme with different waypoints on the route. A historic route will take you to different monuments in the city whereas a shopping route will take you to different shopping centres. There are different routes with different themes for all various interests. The user can also see which waypoints he already visited and which waypoints he still has to visit. ",
    skills: ["Java","Android"],
    pictures: ["https://cdn.discordapp.com/attachments/616314074547879938/981136400562933760/unknown.png","https://cdn.discordapp.com/attachments/616314074547879938/981136592947257344/unknown.png"]
  },
  {
    title: "Festival Planner",
    description: "In my first year of university I developed a festival simulator. The idea of the project was to create a simulator for a festival that will help medical services decide where they will most likely be needed most. The project exists out of two parts. The first part is the planner, in this part you can plan the stages and performances of the artists. The second part is the simulator which will simulate the festival according to how you planned it in the planner. The simulator will simulate the festival with 100 guests. The whole proejct was created with Java. I was responsible for the planner part of the project.",
    skills: ["Java"],
    pictures: ["https://cdn.discordapp.com/attachments/616314074547879938/1014158922359246848/unknown.png","https://cdn.discordapp.com/attachments/616314074547879938/1014159097957982320/unknown.png"]
  }
]
