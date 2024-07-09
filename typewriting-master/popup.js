document.addEventListener('DOMContentLoaded', function () {       
                          // JavaScript zum Öffnen und Schließen des Popups
                          var openPopup = document.getElementById('open-popup');
                          var closePopup = document.getElementById('close-popup');
                          var popupOverlay = document.getElementById('popup-overlay');
                          var popup = document.getElementById('popup');
                          
                          if (openPopup) {
                          openPopup.addEventListener('click', function(event) {
                                                     event.preventDefault();
                                                     popup.style.display = 'block';
                                                     popupOverlay.style.display = 'block';
                                                     });
                          }
                          
                          if (closePopup) {
                          closePopup.addEventListener('click', function() {
                                                      popup.style.display = 'none';
                                                      popupOverlay.style.display = 'none';
                                                      });
                          }
                          
                          if (popupOverlay) {
                          popupOverlay.addEventListener('click', function() {
                                                        popup.style.display = 'none';
                                                        popupOverlay.style.display = 'none';
                                                        });
                          }
                          });
