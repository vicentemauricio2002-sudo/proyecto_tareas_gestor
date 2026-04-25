## USO DE IA

### 1. Sincronización y Diagnóstico Inicial
* **Prompt del Usuario:** "Te voy a mandar primero mi index.html, despues mi style.css y finalmante my script.js para estar en el mismo entendimiento y ver un pequeño error visual que aparecio"
* **Respuesta de la IA:** Identificación de errores de sintaxis en el HTML. Se detectó que cierres prematuros de etiquetas `</div>` rompían la jerarquía de Flexbox.
    * **Código entregado (Estructura base corregida):**
        ```html
        <main id="tableroKanban">
            <h1>Tablero Kanban</h1>
            <div class="tablero">
                <!-- Estructura jerárquica para permitir el uso de Flexbox -->
                <div class="columna" id="pendientes"> 
                    <h2>Pendientes <span class="contador">0</span></h2> 
                    <div class="tareas-container" id="todoContainer"></div> 
                </div>
                <div class="columna" id="en-progreso"> 
                    <h2>En Progreso <span class="contador">0</span></h2> 
                    <div class="tareas-container" id="doingContainer"></div>
                </div> 
                <div class="columna" id="completadas"> 
                    <h2>Completadas <span class="contador">0</span></h2> 
                    <div class="tareas-container" id="doneContainer"></div>  
                </div> 
            </div>
        </main>
        ```

### 2. Resolución de Errores de Lógica (Contadores)
* **Prompt del Usuario:** "el contador no funciona"
* **Respuesta de la IA:** Diagnóstico de discrepancia entre los IDs del HTML (español) y las variables lógicas del Script (inglés).
    * **Código entregado:**
        ```javascript
        function actualizarContadorVisual(estado) {
            let columnaId = "";
            // Mapeo manual de estado lógico a ID de interfaz
            if (estado === "todo") columnaId = "pendientes";
            else if (estado === "doing") columnaId = "en-progreso";
            else if (estado === "done") columnaId = "completadas";

            const contador = document.querySelector(`#${columnaId} .contador`);
            if (contador) {
                const total = tareas.filter(t => t.estado === estado).length;
                contador.innerText = total;
            }
        }
        ```

### 3. Implementación de Diseño Adaptativo (Responsive)
* **Prompt del Usuario:** "ahora tengo que hacer el responsive.css como se hace? los botones en vista de celular no se hacen 100 de width"
* **Respuesta de la IA:** Solución para sobrescribir restricciones de ancho fijo (`max-width`) y cambiar el flujo del tablero de horizontal a vertical.
    * **Código entregado:**
        ```css
        @media (max-width: 768px) {
            .tablero {
                flex-direction: column; /* Apila las columnas verticalmente */
            }
            header, form, main, footer {
                width: 95%;
            }
            /* Forzar el ancho completo ignorando límites previos */
            form button, .btn-cambio {
                max-width: 100% !important;
                width: 100%;
                height: 45px;
            }
            form {
                align-items: stretch;
            }
        }
        ```

### 4. Depuración de Errores del Modelo de Caja (Box Model)
* **Prompt del Usuario:** "las columnas se salen por un poquito de el cuadro blanco al cual deberian estar dentro (main) y la lista del nav no esta pegada a la izquierda"
* **Respuesta de la IA:** Normalización del modelo de caja y eliminación de espacios intrínsecos de los elementos de lista del navegador.
    * **Código entregado:**
        ```css
        /* Normalización global */
        * { 
            box-sizing: border-box; 
            margin: 0; 
            padding: 0; 
        }
        /* Alineación del menú de navegación */
        header nav ul { 
            list-style: none; 
            padding-left: 0; 
            display: flex; 
        }
        ```

---

## Ajustes Manuales y Decisiones Técnicas
* **Jerarquía Visual:** Se ajustaron los tamaños de fuente de los títulos manualmente para mejorar la legibilidad, evitando que los encabezados saturaran el espacio visual en móviles.
* **Depuración de DOM:** Revisión línea por línea de las etiquetas `</div>` para asegurar que el contenedor de tareas no se desbordara del contenedor principal.

---

## Reflexión Crítica
El desarrollo de este Gestor de Tareas mediante IA ha sido un ejercicio de integración técnica. Aunque las herramientas generativas producen algoritmos funcionales rápidamente, la integración estética y la experiencia de usuario (UX) requieren una supervisión humana constante.

La mayor lección aprendida es que la IA actúa como un "copiloto". Sin la intervención manual para corregir el Box Model y la especificidad de CSS, la aplicación habría sido funcionalmente correcta pero visualmente deficiente y con alguna que otra función extra no implementada. Esto demuestra que un profesional debe dominar las bases de CSS, HTML y JS para poder auditar el código generado por IA y garantizar un producto final profesional.