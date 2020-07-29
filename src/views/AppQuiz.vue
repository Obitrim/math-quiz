<template>
	<app-wrapper class="app-quiz">
		<quiz-header>
			<template #math-expression>
				<div class="px-3 py-4 my-4 text-center full-width _question-board">
					<span>{{ mathExpression }}</span>
				</div>
			</template>
		</quiz-header>
		<app-content class="text-center">
			<div class="d-flex justify-content-center">
				<div class="bg-success text-white px-4 py-2">
					<p class="my-0">Correct</p>
					<span>{{ correctAnswerCount }}</span>
				</div>
				<div class="bg-danger text-white ml-3 px-4 py-2">
					<p class="my-0">Wrong</p>
					<span>{{ wrongAnswerCount }}</span>
				</div>
			</div>
		</app-content>
		<section>
			<app-content>
				<div class="option-btns mt-3">
					<option-button 
						:label="option.label" 
						:value="option.value"
						class="correct"
						v-for="(option, index) in options"
						:key="index"
						@click="evaluateSelectedOption(option)"
						/>
				</div>
			</app-content>
		</section>
	</app-wrapper>
</template>

<script>
import swal from 'sweetalert';
import { mapState } from 'vuex';
import QuizHeader from '@/components/quiz/QuizHeader.vue';
import AppWrapper from '@/components/layouts/AppWrapper.vue';
import AppContent from '@/components/layouts/AppContent.vue';
import OptionButton from '@/components/buttons/OptionButton.vue';

export default {
	components: {
		AppWrapper,
		AppContent,
		QuizHeader,
		OptionButton
	},

	data(){
		return {
			options: [
				{
					label: 'A',
					value: 0
				}, 

				{
					label: 'B',
					value: 0
				}, 

				{
					label: 'C',
					value: 0
				}, 

				{
					label: 'D',
					value: 0
				}, 
			],

			currentQuestionNo: 0,
			correctAnswerCount: 0,
			wrongAnswerCount: 0,

			mathExpression: '',
			correctAnswerIndex: null,
			operators: ['+', '-', '*', '/']
		}
	},

	computed: {
		...mapState(['settings']),

		/**
		 *
		 * Gets the correct answer to the math expression
		 *
		 * @returns {Number} - answer to math expression evaluation
		 */
		correctAnswer(){
			let result = eval(this.mathExpression).toFixed(2);
			return Number(result);
		},
	},

	methods: {
		/**
		 *
		 * Starts Quiz
		 *
		 * @returns {undefined} - random mathematical operator
		 */
		startQuiz(){
			this.currentQuestionNo++;
			this.generateMathExpression();
			this.setQuizOptions();
		},

		/**
		 *
		 * Generates a random number between specified limits
		 *
		 * @param {Number} lowerLimit
		 * @param {Number} upperLimit
		 *
		 * @returns {Number} - random number between limits inclusive
		 */
		generateRandomNumber(lowerLimit = this.settings.lowerLimit, upperLimit = this.settings.upperLimit ){
			let limitDiff = upperLimit - lowerLimit;
			let randomNum = Math.floor(Math.random() * (limitDiff + 1)) + this.settings.lowerLimit;

			return randomNum;
		},

		/**
		 *
		 * Gets random math operator 
		 *
		 * @returns {String} - random mathematical operator
		 */
		getMathOperator(){
			let operatorIndex = Math.floor(Math.random() * this.operators.length);
			return this.operators[operatorIndex];
		},

		/**
		 *
		 * evaluates a user's selected option
		 *  
		 * @param {Object} selectedOption - user's option
		 *
		 * @returns {undefined}
		 */
		evaluateSelectedOption(selectedOption){
			let correct = selectedOption.value == this.correctAnswer;

			swal({
				title: correct ? 'Good Job!': 'Ooops!',
				text:`You are ${ correct ? 'right': 'wrong'}`,
				button: 'Next',
				icon: correct ? 'success': 'error'
			}).then(() => {
				if(correct){
					this.correctAnswerCount++;
				} else {
					this.wrongAnswerCount++
				}

				if(this.currentQuestionNo === 10){
					if(this.correctAnswerCount < 10){
						swal({
							title: 'Quiz completed!',
							text: `Correct Answers: ${this.correctAnswerCount}\nWrong Answers: ${this.wrongAnswerCount}`,
							button: 'Restart',
							icon: 'info'
						})
					} else {
						swal({
							title: 'Congratulations!!!',
							text: `You had all right`,
							button: 'Restart',
							icon: 'info'
						})
					}

					this.correctAnswerCount = 0;
					this.wrongAnswerCount = 0;
					this.currentQuestionNo = 0;
				}
				this.startQuiz();
			})
		},

		/**
		 *
		 * Generates a maths expression
		 *
		 * @returns {String} - maths expression
		 */
		generateMathExpression(){
			this.mathExpression = "n s n".replace(/[ns]/g, char => {
				return char == 'n'
					? this.generateRandomNumber()
					: this.getMathOperator();
			});
		},

		/**
		 *
		 * Sets values for option buttons
		 *
		 * @returns {undefined}
		 */
		setQuizOptions(){
			this.options.map(option => {
				return option.value = this.generateRandomNumber(this.correctAnswer - 100, this.correctAnswer + 100);
			});

			let correctAnsBtnIndex = this.generateRandomNumber(0, 3);
			this.options[correctAnsBtnIndex].value = this.correctAnswer;
		}
	},

	mounted(){
		this.startQuiz();
	}
};
</script>