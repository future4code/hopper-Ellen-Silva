select id as identifier, nome from pessoas
where nome not like	"%r%" and email like "%u%";