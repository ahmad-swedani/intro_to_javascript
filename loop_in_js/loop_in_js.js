'use strict'

// how the for loop work and if i want to make an exception for specific variable

var country = ['Macao', 'Kuwait', 'Japan', 'Congo', 'Spain', 'Monaco', 'Kuwait', 'ahmad', 'Angola', 'Brazil', 'Sudan', 'Greece', 'Japan', 'Togo', 'Rwanda', 'Latvia', 'China', 'Yemen', 'Malta', 'Nepal']

// q4:print all the country array unless the element='ahmad'


for (var any_var = 0; any_var < country.length; any_var++) {

    if (country[any_var] == 'ahmad') {
        continue
    }

    console.log(country[any_var]);
}