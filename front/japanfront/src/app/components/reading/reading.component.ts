import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reading',
  templateUrl: './reading.component.html',
  styleUrls: ['./reading.component.css']
})
export class ReadingComponent implements OnInit {
  reading = [
    {
      "id": 1,
      "sentence": "1: konichiwa" + "\n" + "2: konichiwa. nihon ni irassharu n desu ne?" + "\n" + "1: ee. tokyo de kaigi ga arimasu" + "\n" + "2: nihon wa hajimete desu ka?" + "\n" + "1: iie , san nen mae ni itta koto ga arimasu" + "\n" + "2: nihongo ga jozu desu ne" + "\n" + "1: iie , mada mada desu",
      "question1": "what is happening in tokyo?",
      "question2": "is it 1's first time in japan? if not , when did he visit ?",
      "question3": "what is the last sentence meaning?",
      "answer1": "a meeting",
      "answer2": "no, a year ago",
      "answer3": "no, still long way to go"
    },
    {
      "id": 2,
      "sentence": "1: kyoto wa hajimete desu ka?" + "\n" + "2: ee , hajimete desu. kyoto wa nani de yuumei desu ka?" + "\n" + "1: so desu ne -- furui otera de yummei desu" + "\n" + "2: a , so desu ka" + "\n" + "1: onaka ga suite iru desho . tempura o tabeta koto ga arimasu ka?" + "\n" + "2: iie , mada desu" + "\n" + "1: onomimono wa? ocha wa doo desu ka?" + "\n" + "2: arigato gozaimasu. jaa , onegai shimasu",
      "question1": "what is kyoto famous for?",
      "question2": "what is 1 suggesting 2 is?",
      "question3": "what is 1 offering to 2",
      "answer1": "old temples",
      "answer2": "hungry",
      "answer3": "tea"
    },
    {
      "id": 3,
      "sentence": "1: carter san , kino no asakusa wa tanoshikatta desu ne." + "\n" + "2: ee , kankoo kyaku ga takusan imashita ne." + "\n" + "1: asakusa wa itsumo nigiyaka desu yo" + "\n" + "2: nakamise wa totemo omoshirokatta desu. mo ichido ikitai desu ga dooyatte iku n desu ka?" + "\n" + "1: tokyo eki kara yamanote sen ni norimasu. soshite kanda eki de chikatetsu ginza sen ni norikaemasu . asakusa eki wa kanda eki kara juppun desu." + "\n" + "2: so desu ka. arigato gozaimasu",
      "question1": "in the first sentence what is 1 asking carter?",
      "question2": "asakusa is allways?",
      "question3": "how much time from kanda station to asakusa station?",
      "answer1": "yesterday was fun in asakusa isnt it?",
      "answer2": "lively",
      "answer3": "10 minutes"
    },
    {
      "id": 4,
      "sentence": "1: iso san, konnichiwa" + "\n" + "2: paakaa san , konnichiwa . irashai. dozo ohairi kudasai." + "\n" + "1: ojama shimasu --- kore , honno kimochi desu kedo , dozo."+ "\n" + "2: a , domo arigato gozaimasue. nan desu ka?" + "\n" + "1: watashi no okiniirino okashi desu. amerika kara motte kimashita." + "\n" + "2: so desu ka! jaa, koohi to isho ni tabemashoo ka?"+ "\n" + "1: ii desu ne",
      "question1": "what parker (pakka san) is telling after iso after saying hi?",
      "question2": "what is 1 giving to 2?",
      "question3": "what 2 is suggesting to add to what 1 gave him?",
      "answer1": "welcome. please come in",
      "answer2": "his favorite candy",
      "answer3": "coffe"
    },
    {
      "id": 5,
      "sentence": "1: sumimasen . amerika taishikan ni ikitai n desu ga." + "\n" + "2: amerika taishikan wa basu de ikemasu yo. asoko no basu tei kara desu." + "\n" + "1: dono basu ni nottara ii desu ka?"+ "\n" +"2: ju go ban no basu ni notte kudasai." + "\n" + "1: amerika taishikan made donogurai kakarimasu ka?"+ "\n" +"2: so desu ne. ni juppun gurai desu. a, basu ga kimashita. ano basu ni notte kudasai. soshite taishikan no mae de orite kudasai."+ "\n" +"1: domo arigato gozaimashita",
      "question1": "where do 1 wants to go?",
      "question2": "what bus number 1 should get on?",
      "question3": "how much time the bus takes?",
      "answer1": "american embacy",
      "answer2": "15",
      "answer3": "20 minutes"
    },
    {
      "id": 6,
      "sentence": "1: joonzu san, nichi yoobi ni watashi no uchi de isho ni shokuji o shimasen ka??" + "\n" +"2: arigato gozaimasu. demo nichi yoobi wa chotto..."+ "\n" +"1: jaa, do yoobi wa?"+ "\n" +"2: do yoobi mo tsugo ga warui n desu, sumimasen."+ "\n" +"1: so desu ka?"+ "\n" +"2: konshu tomodachi ga amerika kara kuru n desu."+ "\n" +"1: so desu ka? jaa, mata itsuka.",
      "question1": "where and what for 1 inviting john (joonzu san)?",
      "question2": "there are two days of the week mentioned , what are they?",
      "question3": "in 2's last sentence what he is explaining?",
      "answer1": "meal in he's house",
      "answer2": "sunday and saturday",
      "answer3": "he's friend comes from america"
    },
    {
      "id": 7,
      "sentence": "1: a mearii san,konnichiwa"+ "\n" +"2: konnichiwa. anou , yoshida san ni kore o watashite itadakemasen ka?"+ "\n" +"1: yoshida san ni? wakarimashita."+ "\n" +"2: sumimasen, kowaremono desu."+ "\n" +"1: mearii san, raishu watashi no uchi ni irashai masen ka?"+ "\n" +"2: ee, zehi. arigato gozaimasu",
      "question1": "what is 2 asking from 1?",
      "question2": "in the second sentence of 2 he describes a thing, what he describes this thing as?",
      "question3": "where do 1 inviting mearii?",
      "answer1": "to give something to yoshida",
      "answer2": "fragile",
      "answer3": "he's home"
    },
  ]
  text: string = '';
  counter = 1
  status = false
  status2 = false
  status3 = false
  score = 0
  wrong = false
  wrong2 = false
  wrong3 = false
  submit = false
  submit2 = false
  submit3 = false

  constructor() { }

  ngOnInit(): void {
  }

  Next(){
    this.counter +=1
    this.status = false
    this.wrong = false
    this.submit = false
    this.status2 = false
    this.wrong2 = false
    this.submit2 = false
    this.status3 = false
    this.wrong3 = false
    this.submit3 = false
  }
  Check(answer : string , japanese : string){
    if (answer === japanese){
      this.status =true
      this.submit = true
      if (!this.wrong){
        this.score +=1
      }
    }
    if (answer !== japanese){
      this.wrong=true
      this.submit = true
    }
    

  }
  Check2(answer : string , japanese : string){
    if (answer === japanese){
      this.status2 =true
      this.submit2 = true
      if (!this.wrong){
        this.score +=1
      }
    }
    if (answer !== japanese){
      this.wrong2=true
      this.submit2 = true
    }
    

  }
  Check3(answer : string , japanese : string){
    if (answer === japanese){
      this.status3 =true
      this.submit3 = true
      if (!this.wrong){
        this.score +=1
      }
    }
    if (answer !== japanese){
      this.wrong3=true
      this.submit3 = true
    }
    

  }
  

}
