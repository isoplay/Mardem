document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('survey-form');
    const feedback = document.getElementById('feedback');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        feedback.innerHTML = ''; // Limpa qualquer feedback anterior

        // Função para verificar se um campo de texto não está vazio
        function isFieldNotEmpty(selector) {
            const field = document.querySelector(selector);
            return field.value.trim() !== '';
        }

        // Função para verificar se um campo de rádio foi selecionado
        function isRadioChecked(name) {
            const radios = document.querySelectorAll(`input[type="radio"][name="${name}"]:checked`);
            return radios.length > 0;
        }

        // Função para validar o formulário
        function validateForm() {
            const requiredFields = [
                { selector: 'input#name', validate: isFieldNotEmpty },
                { name: 'familiarity', validate: isRadioChecked },
                // Adicione mais campos aqui
            ];

            let isValid = true;

            requiredFields.forEach((field) => {
                if (!field.validate(field.selector || `[name="${field.name}"]`)) {
                    isValid = false;
                    if (field.selector) {
                        document.querySelector(field.selector).classList.add('error');
                    } else {
                        document.querySelectorAll(`input[name="${field.name}"]`).forEach(input => {
                            input.classList.add('error');
                        });
                    }
                } else {
                    if (field.selector) {
                        document.querySelector(field.selector).classList.remove('error');
                    } else {
                        document.querySelectorAll(`input[name="${field.name}"]`).forEach(input => {
                            input.classList.remove('error');
                        });
                    }
                }
            });

            if (isValid) {
                // Envie os dados do formulário para uma URL (substitua com a URL real)
                sendFormData().then(() => {
                    feedback.innerHTML = 'Formulário enviado com sucesso!';
                }).catch(() => {
                    feedback.innerHTML = 'Houve um erro ao enviar o formulário. Por favor, tente novamente.';
                });
            } else {
                feedback.innerHTML = 'Por favor, preencha todos os campos obrigatórios.';
            }
        }

        validateForm();
    });

    // Função para enviar dados do formulário usando AJAX
    function sendFormData() {
        return new Promise((resolve, reject) => {
            // Substitua esta parte com o código de envio real usando AJAX
            // Aqui está um exemplo simples:
            const xhr = new XMLHttpRequest();
            xhr.open('POST', 'https://example.com/submit', true);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resolve();
                    } else {
                        reject();
                    }
                }
            };
            const formData = new FormData(form);
            const formDataObject = {};
            formData.forEach((value, key) => {
                formDataObject[key] = value;
            });
            xhr.send(JSON.stringify(formDataObject));
        });
    }
});
