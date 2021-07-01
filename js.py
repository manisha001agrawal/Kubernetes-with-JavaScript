#!/usr/bin/python3

import cgi
import subprocess
import js2py
print("context-type:text/html")
print()

f = cgi.FieldStorage()
cmd = f.getvalue("x")
out1 = cmd.split()

if out1[0] == 'kubectl':
    out= subprocess.getoutput(cmd)
    print(out)
else:
    if ('show' in cmd or 'list' in cmd or 'lists' in cmd or 'details' in cmd or 'detail' in cmd) and ('pod' or 'pods') in cmd:
        i = 'kubectl get pods --kubeconfig admin.conf'
        out = subprocess.getoutput(i)
        print(out)

    elif ('show' in cmd or 'list' in cmd or 'lists' in cmd or 'details' in cmd or 'detail' in cmd) and ('deploy' or 'deployment') in cmd:
        i = 'kubectl get deployment --kubeconfig admin.conf'
        out = subprocess.getoutput(i)
        print(out)

    elif ('show' in cmd or 'list' in cmd or 'lists' in cmd or 'details' in cmd or 'detail' in cmd) and ('svc' or 'service') in cmd:
        i = 'kubectl get svc --kubeconfig admin.conf'
        out = subprocess.getoutput(i)
        print(out)

    elif ('show' in cmd or 'list' in cmd or 'lists' in cmd or 'details' in cmd or 'detail' in cmd) and ('rs' or 'resources' or 'resource') in cmd:
        i = 'kubectl get rs --kubeconfig admin.conf'
        out = subprocess.getoutput(i)
        print(out)

    elif ('delete' ) in cmd and ('pod' in cmd or 'pods' in cmd) or ('resource' in cmd or 'resources' in cmd) and 'all' in cmd:
        i = 'kubectl delete all --all --kubeconfig admin.conf'
        out = subprocess.getoutput(i)
        print(out)

    else:
        print('\nSomething went to wrong ...\n')
