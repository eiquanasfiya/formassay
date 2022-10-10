import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-from-aray2',
  templateUrl: './from-aray2.component.html',
  styleUrls: ['./from-aray2.component.css']
})
export class FromAray2Component implements OnInit {

  queForm!: FormGroup
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.queForm = this.fb.group({
      questions:this.fb.array([])
    });
    this.addQuestions();
    

  }

  questions(): FormArray{
    return this.queForm.get('questions') as FormArray
  }

  newQuestions(): FormGroup {
    return this.fb.group({
      Task: '',
      options: this.fb.array([this.newOption()])
    });
  }

  addQuestions() {
    this.questions().push(this.newQuestions());
    
  }

  removeQuestions(queIndex: number) {
    if(this.questions().length>=2)
    this.questions().removeAt(queIndex);
  }

  questionOption(queIndex: number): FormArray {
    return this.questions()
      .at(queIndex)
      .get('options') as FormArray;
  }
 
  newOption(): FormGroup {
    return this.fb.group({
      option: ''
    });
  }
 
  addQuestionOption(queIndex: number) {
    this.questionOption(queIndex).push(this.newOption());
  }
 
  removeQuestionOption(queIndex: number, optionIndex: number) {
    if(this.questionOption(queIndex).length>=2)
    this.questionOption(queIndex).removeAt(optionIndex);
  }
 
  onSubmit() {
    console.log(this.queForm.value);
  }

  
}
