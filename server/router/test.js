const express = require('express');
const router = express.Router();

router.post('/result', (req, res) => {
    const _q1 = req.body.q1;
    const _q2 = req.body.q2;
    const _q3 = req.body.q3;
    const _q4 = req.body.q4;
    const _q5 = req.body.q5;
    const _q6 = req.body.q6;

    const sum = new Array();
    sum[0] = 0; // 채찍형
    sum[1] = 0; // 당근형
    sum[2] = 0; // 플랜맨형
    sum[3] = 0; // 응원형

    if(_q1 == 1){sum[0] += 1;}
    else if(_q1 == 2){sum[1] += 1;}
    else if(_q1 == 3){sum[3] += 1;}
    else{sum[2] += 1;}

    if(_q2 == 1){sum[3] += 1;}
    else if(_q2 == 2){sum[1] += 1;}
    else if(_q2 == 2){sum[2] += 1;}
    else{sum[0] += 1;}

    if(_q3 == 1){sum[3] += 1;}
    else if(_q3 == 2){sum[2] += 1;}
    else if(_q3 == 2){sum[1] += 1;}
    else{sum[0] += 1;}

    if(_q4 == 1){sum[1] += 1;}
    else if(_q4 == 2){sum[0] += 1;}
    else if(_q4 == 2){sum[2] += 1;}
    else{sum[3] += 1;}

    if(_q5 == 1){sum[0] += 1;}
    else if(_q5 == 2){sum[1] += 1;}
    else if(_q5 == 2){sum[2] += 1;}
    else{sum[3] += 1;}

    if(_q6 == 1){sum[2] += 1;}
    else if(_q6 == 2){sum[0] += 1;}
    else if(_q6 == 2){sum[3] += 1;}
    else{sum[1] += 1;}

    var max = 0, max_index = 0;
    for(var i = 0; i < 4; i++){
        if(sum[i] > max){
            max = sum[i];
            max_index = i;
        }
    }

    res.json({success: true, result: max_index + 1});
});

router.get('/result/:id', (req, res) => {
    const _id = req.params.id;
    console.log(_id);

    if(_id === '1'){
        res.json({
            type: 1,
            title: '열심히 채찍형', 
            content: '달리는 말에 채찍질 한다. 당신의 목표 유형은 스스로 더욱 성장하기 위해 노력하는 \'채찍형\'입니다. 스스로 노력하고 있을 때 안정감을 느끼는 이 유형은 명확한 목표를 가지고 노력하는 것이 좋아요.',
            recommend: 'n등급 달성하기 등 명확한 목표를 설정해보세요 :)'
        })
    }
    else if(_id === '2'){
        res.json({
            type: 2,
            title: '흥이 많은 당근형', 
            content: '나는 채찍보다 당근이 좋아! 당신의 목표 유형은 자신이 좋아하는 일을 할 때 가장 빛나는 \'당근형\'입니다. 자신이 좋아하는 일을 할 때 가장 좋은 결과를 만드는 이 유형은 스스로 즐길 수 있는 정도의 목표를 설정하는 것이 좋아요.',
            recommend: '자신이 좋아하고 잘 할 수 있는 일을 더 잘하기 위한 목표를 세워보세요 :)'
        })
    }
    else if(_id === '3'){
        res.json({
            type: 3,
            title: '규칙적인 플랜맨', 
            content: '매일 7시에 일어나서 양치를 해야지.. 당신의 목표 유형은 안정적인 환경을 좋아하는 \'플랜맨\'입니다. 체계적인 규칙을 지켜나갈 때 가장 안정감을 느끼는 이 유형은 일상 생활에서 지킬 수 있는 목표를 설정하는 것이 좋아요.',
            recommend: '건강, 공부, 식습관 등 일상에 적용할 수 있는 목표를 세워보세요 :)'
        })
    }
    else{
        res.json({
            type: '4',
            title: '아자아자 응원형', 
            content: '나는 할 수 있다! 주변의 응원을 받을 때 더욱 힘이 나는 당신의 목표 유형은 \'응원형\'입니다. 자신을 응원해주는 사람을 만난다면 더욱 강력한 시너지를 낼 수 있을꺼에요!',
            recommend: '자신이 한 일들을 소소하게 자랑할 수 있는 공간을 마련하는 것이 좋을 것 같아요 :)'
        })
    }
})

module.exports = router;