import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-game',
  templateUrl: './image-game.component.html',
  styleUrls: ['./image-game.component.css']
})
export class ImageGameComponent implements OnInit {
  game = [
    {
      "id" : 1,
      "japanese" : "Bear",
      "english" : "Kuma",
      "text" : "Bears are one of the smartest and intelligent mammals on this earth"
    },
    {
      "id" : 2,
      "japanese" : "Shark",
      "english" : "Same",
      "text" : "Sharks do not have bones"
    },
    {
      "id" : 3,
      "japanese" : "Dolphin",
      "english" : "Iruka",
      "text" : "Dolphins are marine mammals. They must surface to breathe air and give birth to live young"
    },
    {
      "id" : 4,
      "japanese" : "Elephant",
      "english" : "Zo",
      "text" : "Elephants communicate through vibrations"
    },
    {
      "id" : 5,
      "japanese" : "Giraffe",
      "english" : "Kirin",
      "text" : " Giraffes get most of their water from their leafy meals so they only need to drink every few days"
    },
    {
      "id" : 6,
      "japanese" : "Lion",
      "english" : "Rion",
      "text" : "Lion is called as “King of Jungle” because of its huge size and hunting capacity"
    },
    {
      "id" : 7,
      "japanese" : "Tiger",
      "english" : "Tora",
      "text" : "At full speed, tigers can reach up to 65km/h , A tiger’s roar can be heard as far as three kilometres away"
    },
    {
      "id" : 8,
      "japanese" : "Zebra",
      "english" : "Shimauma",
      "text" : "When plains zebras sense a predator, they use a high-pitched sound to alert the herd. And at night, at least one member of the group stays awake to keep watch"
    },
    {
      "id" : 9,
      "japanese" : "Eagle",
      "english" : "Washi",
      "text" : "Eagles are one of the fastest birds on the planet. They can fly as fast as a speeding car at 120-160 km per hour"
    },
    {
      "id" : 10,
      "japanese" : "Snake",
      "english" : "Hebi",
      "text" : "According to the latest count, there are 3,789 snake species, making them the second largest group of reptiles after lizards"
    }
  ]
  counter = 1
  status = false
  score = 0
  wrong = false
  submit = false

  constructor() { }

  ngOnInit(): void {
  }

  Next(){
    this.counter +=1
    this.status = false
    this.wrong = false
    this.submit = false
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

}
