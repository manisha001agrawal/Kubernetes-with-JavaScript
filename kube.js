function output(i){
    x = document.getElementById('p1');
    var xhr = new XMLHttpRequest();
    xhr.open("GET","http://192.168.99.102/cgi-bin/js.py?x=" + i,false);
    xhr.send();
    var output1 = xhr.responseText;
    x.innerHTML = output1;
}

function cmd(){
    var i = document.getElementById('inp1').value;
    if(i != ''){
        alert(i);
        output(i);
    }
    else{
        alert('Type something');
    }
}

function show_pod(){
    var i = 'kubectl get pods --kubeconfig admin.conf';
    alert(i);
    output(i);
}

function Launch_pod(){
    var name = prompt("Enter your  Pod name : ");
    if(name != ''){
        var i = 'kubectl run '+name+' --image=manisha001agrawal/apache-webserver-php:v1 --kubeconfig admin.conf';
        alert(i);
        output(i);
    }
    else{
        alert('Something went to wrong');
    }
}

function deployment(){
    var deployment_name = prompt('Enter the Deployment Name - ')
    if(deployment_name != ''){
        var i = 'kubectl create deployment '+deployment_name+' --image=manisha001agrawal/apache-webserver-php:v1 --kubeconfig admin.conf';
        alert(i);
        output(i);
    }
    else{
        alert('Something went to wrong');
    }
}

function expose(){
    var deployment_name = prompt('Enter the Deployment Name - ')
    if(deployment_name != ''){
        var i = 'kubectl expose deployment '+deployment_name+' --port=80 --type=NodePort --kubeconfig admin.conf';
        output(i);
    }
    else{
        alert('Something went to wrong');
    }
}

function scale(){
    var n= prompt('Enter the no. of replicas you want - ');
    n = parseInt(n);
    if(Number.isInteger(n) && n>0){
        var deploy_name = prompt('Enter the Deployment Name - ');
        if(deploy_name != ''){
           var i ='kubectl scale deployment '+deploy_name+' --replicas='+n+' --kubeconfig admin.conf';
           output(i);
        }
        else{
           alert('Something went to wrong');
        }
    }
    else{
        alert('Type Integer Value which is greater than 0')
    }
}

function del_res(){
    var res_name = prompt('which resource u want to be delete - ')
    if(res_name != ''){
        var name = prompt('Enter the '+res_name+' name - ');
        if(name != ''){
           var i = 'kubectl delete '+res_name+' '+name+' --kubeconfig admin.conf';
           output(i);
        }
        else{
           alert('Something went to wrong');
        }
    }
    else{
           alert('Something went to wrong');
    }
}
