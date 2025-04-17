import { Subject } from "rxjs";
import { Exercise } from "./exercise.model";







export class TrainingService {


    exerciseChanged = new Subject<Exercise | null>()



    private availableExercises: Exercise[] = [
        { id: 'crunches', name: 'کرانچ', duration: 30, calories: 8 },
        { id: 'squet', name: 'اسکوات', duration: 180, calories: 15 },
        { id: 'side-iunges', name: 'لانچ اسکوات', duration: 120, calories: 18 },
        { id: 'burpees', name: 'شنا', duration: 68, calories: 8 },
    ]


    private exercisesFinish: Exercise[] = [
        {
            id: 'side-iunges',
            name: 'لانچ اسکوات',
            duration: 120,
            calories: 18,
            date: new Date(),
            state: 'canceled'
        },
        {
            id: 'burpees',
            name: 'شنا',
            duration: 60,
            calories: 8,
            date: new Date(),
            state: 'complated'
        }
    ]


    private runningExercise: Exercise | null = null;



    


    getAvailableExercises() {
        return this.availableExercises.slice()
    }


    startExercise(selectedId: string) {
        this.runningExercise = this.availableExercises.find(ex => ex.id === selectedId)!;
        this.exerciseChanged.next({ ...this.runningExercise })
    }



    getRunningExercise() {
        return { ...this.runningExercise };
    }

    completeExecise() {
        this.exercisesFinish.push({ ...this.runningExercise!, date: new Date(), state: 'complated' })
        this.runningExercise = null
        this.exerciseChanged.next(null)

    }

    cancelExercise(progress: number) {
        this.exercisesFinish.push({ ...this.runningExercise!, date: new Date(), state: 'canceled', duration: this.runningExercise?.duration! * progress / 100, calories: this.runningExercise?.calories! * progress / 100 })
        this.runningExercise = null
        this.exerciseChanged.next(null)

    }

    getCompleteOrCancelExercises() {
        return [...this.exercisesFinish]
    }



}