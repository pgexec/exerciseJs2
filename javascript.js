function verificar() {
    let fano = document.getElementById('textano')
    let res = document.getElementById('res')
    let data = new Date()
    let ano = data.getFullYear()
    if ( fano.value.length == 0 || Number(fano.value) > ano ){
        window.alert("Algo deu errado, tente novamente!")
    }else{
       let fsex = document.getElementsByName('radsex')
       let idade = ano - Number(fano.value)
       let genero = ''  
       let img = document.createElement('img')
       img.setAttribute('id', 'foto')

       if(fsex[0].checked){
        genero = 'Homem'
            if(idade >= 0 && idade < 10 ){
                img.setAttribute('src','homem-bebe.png')
            }else if(idade < 21){
                img.setAttribute('src','homem-jovem.png')
            }else if(idade < 50 ){
                img.setAttribute('src', 'homem-adulto.png')                    
            }else{
                img.setAttribute('src', 'homem-idoso.png')
            }
       }else if(fsex[1].checked){
        genero = 'Mulher'
        if(idade >= 0 && idade < 10 ){
            img.setAttribute('src','mulher-bebe.png')
        }else if(idade < 21){
            img.setAttribute('src','mulher-jovem.png')
        }else if(idade < 50 ){
            img.setAttribute('src', 'mulher-adulta.png')                    
        }else{
            img.setAttribute('src', 'mulher-idosa.png')
        }
       }
       res.style.textAlign = 'center'
       res.innerHTML =`Foi detectado ${genero} de ${idade} anos`
       res.appendChild(img)


    }


}
