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


PMAK-5e26f84f701e78003f12fbe7-9ee5382a42052c81074aca1a83619bd35a

PMAK-5e26f8f055c24f0081eb32fa-205c3a9005063476a25427c319644693b1
