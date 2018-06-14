angular.module('todoApp', [])
    .controller('todoController', function($scope) {
        $scope.tasks = [];
		$scope.val=0;
        $scope.add = function() {
            $scope.tasks.push($scope.title);
        }
        $scope.delete = function() {
            $scope.tasks.splice(this.$index, 1);
        }
		$scope.finish = function() {
					
			if ($scope.chkbox){
				$scope.val +=1;
			}
			
			return $scope.val;
			
		}
		$scope.remainingCnt = function() {
			$scope.remaining = $scope.tasks.length - $scope.val;
			return $scope.remaining;
		}
		
		$scope.totalCnt = function() {
			$scope.total = $scope.tasks.length;
			return $scope.total;
		}
    })