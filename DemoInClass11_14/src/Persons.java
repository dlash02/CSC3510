public class Persons {
    int pId;
    int age;
    String job;
    String state;

    public Persons(int pId, int age, String job, String state) {
        this.pId = pId;
        this.age = age;
        this.job = job;
        this.state = state;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getJob() {
        return job;
    }

    public void setJob(String job) {
        this.job = job;
    }

    public String getState() {
        return this.state;
    }

    public void setState(String state) {
        this.state = state;
    }
}
