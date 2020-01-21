script type="text/javascript">

        function getUrlVars(){

            var vars = [], <h1>a;
            var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
            for(var i = 0; i < hashes.length; i++)
            {
                hash = hashes[i].split('=');
                vars.push(hash[0]);
                vars[hash[0]] = hash[1];
            }
            return vars;
        }

        var get_parameters = getUrlVars();
        if(get_parameters['rpath'] != undefined && get_parameters['rpath'] != 'default'){
            var redirectPath = get_parameters['rpath'];
            document.getElementById('redirectpg').href = redirectPath;
        }else{

            document.getElementById('redirectpg').href = "index.php";

        }

    </script>


PMAK-5e26f6c96a2e7e0029539540-d46473385b159e2dcd0fc8b2afb95095c7
