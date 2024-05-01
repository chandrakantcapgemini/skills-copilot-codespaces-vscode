function skillsMember(){
    return {
        restrict: 'E',
        templateUrl:'modules/skills/views/member.html',
        controller:"SkillsMemberController",
        controller:'vm',
        bindToController: true,
        scope: {
            member:'m'
        }
    };
}