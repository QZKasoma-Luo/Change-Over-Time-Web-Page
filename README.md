# Change Over Time Web Page by the Status of the Machine
 This Project is Written by Vue.js which monitor the change over time of the machine. 
Feb/13/2023: If you wonder what is the change over time, here is the explaination: https://www.indeed.com/career-advice/career-development/what-is-changeover-time

By running this web pages, you need to install node.js (version 16.xx) and run npm install in the folder change-over-time before you run npm run serve.
After the npm run serve has finshed, you can open the web-page by going to the local host

Feb/27/2023: Notice: This Web-page does not support any version before IE8, and the support of IE has been stoped in June 2022 that this web-page should work on your computer web browser (please do not say that you are using IE mode in edge to browse this..., you have edge already! Use edge!! lol)

March/2/2023: Well, although I have not update on github resp of this project, I am almost done the vue part (at least the sign in page and the axios) and I mean it should be running ok on a static host page (like the github.io), I will update it in few days. Yet the problem is the change over time are always changing in the real world and what I want is this dashboard can display the chart by the leatest data from the tooling machine or CNC. So yes, I need a server to do that, and more than that, I need to bulid a framework on the serve to send or recieve the mock data from the dashboard. To sum up, I am going to spend my time on C# and Asp.Net MVC in next few months. I mean, I may go rent a cloud server to host this if I can really make this change over time web-monitor work from backend to the frontend. Best effort and luck to me :) .

March/6/2023: The login page and the interface structure are done, the backend mock server will be started after apply the echarts to the dashboard under each section, and the version of Vue.js has donwgrade to Vue 2.

The login page: 
![LoginPage](https://user-images.githubusercontent.com/98981724/223130403-369ecf68-edc0-4db9-bdff-24e46ed546de.png)


The interface structure: 
![userinterface](https://user-images.githubusercontent.com/98981724/223130018-d5be92e3-8d13-4188-a9ff-6667d73aeade.png)


The Echarts and the Navigation bar:
![dashboard ](https://user-images.githubusercontent.com/98981724/223130071-cb4683dc-f417-476c-af6a-7e6c303a2b76.png)

The login page will let you pass as long as you entered something in both columns since the mock server is not ready yet. and it will send the request to the mock server to check the account info once the mock server is ready.
