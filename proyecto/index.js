class Activity {
    constructor(id, title, description, imgUrl){
        this.id = id;
        this.title = title;
        this.description = description;
        this. imgUrl = imgUrl;
    }
}

class Repository{
    constructor(activities = []){
        this.activities = activities
    }

    getAllActivities(){
        return this.activities 
    }

    createActivity(id, title, description, imgUrl){
        const newActivity = new Activity(id, title, description, imgUrl)
        this.activities.push(newActivity)
        return newActivity
    }

    deleteActivity(id){
    this.activities =  this.activities.filter( (activity) => activity.id !== id )
    }
}

const repo = new Repository();

const activity1 = repo.createActivity(1, "Actividad 1", "Solucion actiidad 1", "img_url_prueba")
const activity2 = repo.createActivity(2, "Actividad 2", "Solucion actiidad 2", "img_url_prueba")
const activity3 = repo.createActivity(3, "Actividad 3", "Solucion actiidad 3", "img_url_prueba")
console.log(repo.getAllActivities())

