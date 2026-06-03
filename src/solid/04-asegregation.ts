interface Bird {
    eat(): void;
}

interface SwimmingBird {
swim(): void;
}

interface RunningBird{
    run(): void;
}

interface FlyingBird{
    fly(): number;
}

class Tucan implements Bird, FlyingBird {
    public fly(){return 10;} 
    public eat(){}
    public run(){}
}

class Hummingbird implements Bird, FlyingBird {
    public fly(){return 5;}
    public eat(){}
    public run(){}
}

class Ostrich implements Bird, RunningBird {
    public eat(){}
    public run(){}
}

class Penguin implements Bird, RunningBird, SwimmingBird {
    public eat(){}
    public run(){}
    public swim() {}
}