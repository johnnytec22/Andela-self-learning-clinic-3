function aritGeo(array)
{

	if (array.length === 0)
		{
			return 0;
		}

	var common_difference = array[1] - array[0];
	var common_ratio = array[1] / array[0];

	var arithmetic = true;
	var geometric = true;

	
	for (var i = 0; i < array.length - 1; i++)
	{

		if(array[i + 1] - array[i] !== common_difference)
		{
			arithmetic = false;
		}


		if(array[i + 1] / array[i] !== common_ratio)
		{
			geometric = false;
		}

	}

	if(arithmetic)
	{
		return 'Arithmetic';
	}else if(geometric){
		return 'Geometric';
	}else{
		return -1;
	}

}
