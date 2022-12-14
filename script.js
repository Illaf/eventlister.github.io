let users = [
    'workshops',
    'seminars',
    'parties',
    'technical fests',
    'national events',
    'Dramas',
    'health events',
    'academic events'
  ];
  
  ul = document.getElementById("users-list");
  
  let render_lists = function(lists){
    let li = "";
    for(index in lists){
      li += "<li>" + lists[index] + "</li>";
    }
    ul.innerHTML = li;
  }
  
  render_lists(users);
  
  // lets filters it
  input = document.getElementById('filter_users');
  
  let filterUsers = function(event){
    keyword = input.value.toLowerCase();
    filtered_users = users.filter(function(user){
          user = user.toLowerCase();
         return user.indexOf(keyword) > -1; 
    });
    
    render_lists(filtered_users);
  }
  
  input.addEventListener('keyup', filterUsers);
  
  