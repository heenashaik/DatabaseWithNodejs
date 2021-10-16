const client=require('./dbase3');
client.connect();
//client.query("INSERT INTO students VALUES(1,'Heena Shaik',7330811846,'heenaaim08@gmail.com','Web Development')", (err, result)=>{
//client.query("INSERT INTO students VALUES(2,'Mastani Shaik',9493462511,'mastanishaik476@gmail.com','Machine Learning')", (err, result)=>{
//client.query("INSERT INTO students VALUES(3,'Syed Basha',7093965380,'shaiksyedbasha7093@gmail.com','Artificial Intelligence ')", (err, result)=>{
//client.query("INSERT INTO students VALUES(4,'Lodi Suhana',9502759063,'pathansuhana@gmail.com','Data Science')", (err, result)=>{
//client.query("INSERT INTO students VALUES(5,'Pathan Zoya Khanam',9908449857,'zoyakhanam@gmail.com','Robotics')", (err, result)=>{
//client.query("INSERT INTO students VALUES(6,'Shemran Shaik',9166015986,'shemranshaik06@gmail.com','Business Studies')", (err, result)=>{
//client.query("INSERT INTO students VALUES(7,'Shaik samiha',8267691989,'samii0610@gmail.com','Information Science')", (err, result)=>{
//client.query("INSERT INTO students VALUES(8,'Shaik Nadia',9502072783,'nadiashaik@gmail.com','Aerospace')", (err, result)=>{
//client.query("INSERT INTO students VALUES(9,'Shaik Mohammad Adnan',9502757617,'shaikadnan26@gmail.com','Product Management')", (err, result)=>{
//client.query("INSERT INTO students VALUES(10,'Lodi Riya',7098652920,'riya.lodi@gmail.com','Computer Science')", (err, result)=>{
//client.query("INSERT INTO students VALUES(11,'Mohammad Zeeshan Khan',9087659821,'mohammadzeeshu13@gmail.com','Deep Learning')", (err, result)=>{
//client.query("INSERT INTO students VALUES(12,'Haseena Ahlum',8120765491,'haseena.ahlum06@gmail.com','Electrical')", (err, result)=>{
    client.query("INSERT INTO students VALUES(13,'Risha',9000389050,'19btrcs071@jainuniversity.ac.in','Mechanical')", (err, result)=>{
    if(!err){
        console.log("Data inserted successfully");
    }
    client.end();
})