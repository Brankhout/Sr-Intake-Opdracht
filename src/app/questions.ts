export class Questions {
    name: string;
    introText: string;
    questions:[{
        questionId: number;
        question: string;
        questionType:'';
        answer:[{
            answer: string;
            answerId: number;
            isCorrect: boolean;
        }]

    }]
}
