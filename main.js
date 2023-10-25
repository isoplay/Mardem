document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
  
      // Função para verificar se um campo de radio foi selecionado
      function isRadioChecked(name) {
        const radios = document.querySelectorAll(`input[type="radio"][name="${name}"]:checked`);
        return radios.length > 0;
      }
  
      // Função para verificar se um campo de texto não está vazio
      function isTextFieldNotEmpty(id) {
        const textField = document.getElementById(id);
        return textField.value.trim() !== '';
      }
  
      // Função para verificar se o campo de texto tem um número
      function isNumberFieldNotEmpty(id) {
        const textField = document.getElementById(id);
        return !isNaN(textField.value) && textField.value.trim() !== '';
      }
  
      // Função para validar o formulário
      function validateForm() {
        const requiredFields = [
          { type: 'radio', name: 'familiarity', validate: isRadioChecked },
          { type: 'radio', name: 'usedRegisterSlabs', validate: isRadioChecked },
          { type: 'radio', name: 'timer', validate: isRadioChecked },
          { type: 'text', id: 'recurso', validate: isTextFieldNotEmpty },
          { type: 'radio', name: 'dificuldade', validate: isRadioChecked },
          { type: 'radio', name: 'improvement', validate: isRadioChecked },
          { type: 'textarea', id: 'howToImprove', validate: isTextFieldNotEmpty },
          { type: 'radio', name: 'usedBefore', validate: isRadioChecked },
          { type: 'radio', name: 'usageFrequency', validate: isRadioChecked },
          { type: 'textarea', id: 'likedFeatures', validate: isTextFieldNotEmpty },
          { type: 'radio', name: 'easeOfUse', validate: isRadioChecked },
          { type: 'radio', name: 'improvement', validate: isRadioChecked },
          { type: 'textarea', id: 'howToImproveVenda', validate: isTextFieldNotEmpty },
          { type: 'radio', name: 'usedBeforeCompra', validate: isRadioChecked },
          { type: 'radio', name: 'usageFrequencyCompra', validate: isRadioChecked },
          { type: 'textarea', id: 'likedFeaturesCompra', validate: isTextFieldNotEmpty },
          { type: 'radio', name: 'easeOfUseCompra', validate: isRadioChecked },
          { type: 'radio', name: 'improvementCompra', validate: isRadioChecked },
          { type: 'textarea', id: 'howToImproveCompra', validate: isTextFieldNotEmpty },
          { type: 'radio', name: 'usedBeforeGerenciar', validate: isRadioChecked },
          { type: 'radio', name: 'usageFrequencyGerenciar', validate: isRadioChecked },
          { type: 'textarea', id: 'likedFeaturesGerenciar', validate: isTextFieldNotEmpty },
          { type: 'radio', name: 'easeOfUseGerenciar', validate: isRadioChecked },
          { type: 'radio', name: 'improvementGerenciar', validate: isRadioChecked },
          { type: 'textarea', id: 'howToImproveGerenciar', validate: isTextFieldNotEmpty },
          { type: 'radio', name: 'usedBeforeSetores', validate: isRadioChecked },
          { type: 'radio', name: 'usageFrequencySetores', validate: isRadioChecked },
          { type: 'textarea', id: 'likedFeaturesSetores', validate: isTextFieldNotEmpty },
          { type: 'radio', name: 'previousExperience', validate: isRadioChecked },
          { type: 'textarea', id: 'relevantExperience', validate: isTextFieldNotEmpty },
          { type: 'radio', name: 'cuttingAndFinishingKnowledge', validate: isRadioChecked },
          { type: 'textarea', id: 'deadlineHandling', validate: isTextFieldNotEmpty },
          { type: 'radio', name: 'heavyEquipmentTraining', validate: isRadioChecked },
          { type: 'textarea', id: 'futureVision', validate: isTextFieldNotEmpty },
        ];
  
        let isValid = true;
  
        requiredFields.forEach((field) => {
          if (field.type === 'radio') {
            if (!field.validate(field.name)) {
              isValid = false;
            }
          } else if (field.type === 'text') {
            if (!field.validate(field.id)) {
              isValid = false;
            }
          } else if (field.type === 'textarea') {
            if (!field.validate(field.id)) {
              isValid = false;
            }
          }
        });
  
        if (isValid) {
          alert('Formulário válido. Os dados podem ser enviados.');
        } else {
          alert('Por favor, preencha todos os campos obrigatórios.');
        }
      }
  
      validateForm();
    });
  });
  